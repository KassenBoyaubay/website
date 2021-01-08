const functions = require("firebase-functions");
const express = require("express");
// cors middleware -> allow to use functions of firebase & other resources to whom it requests
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HWcbIDbp2oirb7ph5Pz0wzVnYg8EwvqAur7YSFpBFSkpwxxT8wF2uXiQg3Z7wpLhZLMFjGdQfYOrJn0OxMEKLoW00orr4gc3e"
);

const { getAllScreams, postOneScream, getScream, deleteScream, commentOnScream, likeScream, unlikeScream } = require('./handlers/SocialMediaApp/screams')
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser, getUserDetails, markNotificationsRead } = require('./handlers/SocialMediaApp/users')

const { db } = require('./util/admin')

const FBAuth = require('./util/fbAuth')


// API


// - App config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes

// AmazonApp
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/amazonApp/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


//SocialMediaApp

// scream routes
app.get("/socialMediaApp/screams", getAllScreams);
app.post("/socialMediaApp/scream", FBAuth, postOneScream);
app.get("/socialMediaApp/scream/:screamId", getScream)
app.delete("/socialMediaApp/scream/:screamId", FBAuth, deleteScream)
app.post('/socialMediaApp/scream/:screamId/comment', FBAuth, commentOnScream)
app.get('/socialMediaApp/scream/:screamId/like', FBAuth, likeScream)
app.get('/socialMediaApp/scream/:screamId/unlike', FBAuth, unlikeScream)

// users routes
app.post("/socialMediaApp/signup", signup);
app.post("/socialMediaApp/login", login);
app.post("/socialMediaApp/user/image", FBAuth, uploadImage)
app.post("/socialMediaApp/user", FBAuth, addUserDetails)
app.get("/socialMediaApp/user", FBAuth, getAuthenticatedUser)
app.get("/socialMediaApp/user/:handle", getUserDetails)
app.post("/socialMediaApp/notifications", FBAuth, markNotificationsRead)

// - Listen command
exports.api = functions.region("europe-west3").https.onRequest(app);

exports.createNotificationOnLike = functions.region("europe-west3").firestore.document('/SocialMediaApp/pageA/likes/{id}')
  .onCreate((snapshot) => {
    return db.doc(`/SocialMediaApp/pageA/screams/${snapshot.data().screamId}`).get()
      .then(doc => {
        if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
          return db.doc(`/SocialMediaApp/pageA/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'like',
            read: false,
            screamId: doc.id
          })
        } else return console.error('Document doesn\'t exis')
      })
      .catch(err => {
        console.error(err)
      })
  })

exports.deleteNotificationOnLike = functions.region("europe-west3").firestore.document('/SocialMediaApp/pageA/likes/{id}')
  .onDelete((snapshot) => {
    return db.doc(`/SocialMediaApp/pageA/notifications/${snapshot.id}`).delete()
      .catch(err => {
        console.error(err)
        return
      })
  })

exports.createNotificationOnComment = functions.region("europe-west3").firestore.document('/SocialMediaApp/pageA/comments/{id}')
  .onCreate((snapshot) => {
    return db.doc(`/SocialMediaApp/pageA/screams/${snapshot.data().screamId}`).get()
      .then(doc => {
        if (doc.exists && doc.data().userHandle !== snapshot.data().userHandle) {
          return db.doc(`/SocialMediaApp/pageA/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'comment',
            read: false,
            screamId: doc.id
          })
        } else return console.error('Document doesn\'t exis')
      })
      .catch(err => {
        console.error(err)
      })
  })

exports.onUserImageChange = functions.region("europe-west3").firestore.document('/SocialMediaApp/pageA/users/{userId}')
  .onUpdate((change) => {
    console.log(change.before.data())
    console.log(change.after.data())
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log('image has been changed')
      const batch = db.batch()
      return db.collection("SocialMediaApp").doc("pageA").collection("screams").where('userHandle', '==', change.before.data().handle).get()
        .then(data => {
          data.forEach(doc => {
            const scream = db.doc(`/SocialMediaApp/pageA/screams/${doc.id}`)
            batch.update(scream, { userImage: change.after.data().imageUrl })
          })
          return batch.commit()
        })
        .catch(err => {
          console.error(err)
        })
    } else return true
  })

exports.onScreamDelete = functions.region("europe-west3").firestore.document('/SocialMediaApp/pageA/screams/{screamId}')
  .onDelete((snapshot, context) => {
    const screamId = context.params.screamId
    const batch = db.batch()
    return db.collection("SocialMediaApp").doc("pageA").collection("comments").where('screamId', '==', screamId).get()
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/SocialMediaApp/pageA/comments/${doc.id}`))
        })
        return db.collection("SocialMediaApp").doc("pageA").collection("likes").where('screamId', '==', screamId).get()
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/SocialMediaApp/pageA/likes/${doc.id}`))
        })
        return db.collection("SocialMediaApp").doc("pageA").collection("notifications").where('screamId', '==', screamId).get()
      })
      .then(data => {
        data.forEach(doc => {
          batch.delete(db.doc(`/SocialMediaApp/pageA/notifications/${doc.id}`))
        })
        return batch.commit()
      })
      .catch(err => {
        console.error(err)
      })
  })

// Example endpoint
// http://localhost:5001/website-f5daf/europe-west3/api

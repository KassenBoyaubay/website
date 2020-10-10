const functions = require("firebase-functions");
const firebase = require("firebase");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HWcbIDbp2oirb7ph5Pz0wzVnYg8EwvqAur7YSFpBFSkpwxxT8wF2uXiQg3Z7wpLhZLMFjGdQfYOrJn0OxMEKLoW00orr4gc3e"
);
const firebaseConfig = {
  apiKey: "AIzaSyATDkoLM8io02tJPOnMfPo0LljKdiY3esw",
  authDomain: "website-f5daf.firebaseapp.com",
  databaseURL: "https://website-f5daf.firebaseio.com",
  projectId: "website-f5daf",
  storageBucket: "website-f5daf.appspot.com",
  messagingSenderId: "873800702670",
  appId: "1:873800702670:web:9cb10e75ca7b55d0d40e9f",
  measurementId: "G-NZYZF1QXW8",
};

// API
admin.initializeApp();
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

const FBAuth = (request, response, next) => {
  let idToken;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = request.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return response.status(403).send({ error: "Unauthorized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      request.user = decodedToken;
      console.log(decodedToken);
      return db
        .collection("SocialMediaApp")
        .doc("pageA")
        .collection("users")
        .where("userId", "==", request.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      request.user.handle = data.docs[0].data().handle;
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err);
      return response.status(403).send(err);
    });
};

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
app.get("/socialMediaApp/screams", (request, response) => {
  db.collection("SocialMediaApp")
    .doc("pageA")
    .collection("screams")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        });
      });
      return response.send(screams);
    })
    .catch((err) => console.log(err));
});

app.post("/socialMediaApp/scream", FBAuth, (request, response) => {
  const newScream = {
    body: request.body.body,
    userHandle: request.user.handle,
    createdAt: new Date().toISOString(), // admin.firestore.Timestamp.fromDate(new Date())
  };

  db.collection("SocialMediaApp")
    .doc("pageA")
    .collection("screams")
    .add(newScream)
    .then((doc) => {
      return response.send({
        message: `document ${doc.id} created successfully`,
      });
    })
    .catch((err) => {
      response.status(500).send({ error: "something went wrong" });
      console.log(err);
    });
});

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const isEmail = (email) => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

// Signup route
app.post("/socialMediaApp/signup", (request, response) => {
  const newUser = {
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    handle: request.body.handle,
  };

  let errors = {};

  if (isEmpty(newUser.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(newUser.email)) {
    errors.email = "Must be a valid email address";
  }

  if (isEmpty(newUser.password)) {
    errors.password = "Must not be empty";
  }

  if (newUser.password !== newUser.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  if (isEmpty(newUser.handle)) {
    errors.handle = "Must not be empty";
  }

  if (Object.keys(errors).length > 0) return response.status(400).send(errors);

  let token, userId;
  db.doc(`/SocialMediaApp/pageA/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return response
          .status(400)
          .send({ handle: "this handle is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idtoken) => {
      token = idtoken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db
        .doc(`/SocialMediaApp/pageA/users/${newUser.handle}`)
        .set(userCredentials);
    })
    .then(() => {
      return response.status(201).send({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return response.status(400).send({ email: "Email is already in use" });
      } else {
        return response.status(500).send({ error: err.code });
      }
    });
});

app.post("/socialMediaApp/login", (request, response) => {
  const user = {
    email: request.body.email,
    password: request.body.password,
  };

  let errors = {};

  if (isEmpty(user.email)) {
    errors.email = "Must not be empty";
  }

  if (isEmpty(user.password)) {
    errors.password = "Must not be empty";
  }

  if (Object.keys(errors).length > 0) return response.status(400).send(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return response.send({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return response
          .status(403)
          .send({ general: "Wrong credentials, please try again" });
      } else return response.status(500).send({ error: err.code });
    });
});

// - Listen command
exports.api = functions.region("europe-west3").https.onRequest(app);

// Example endpoint
// http://localhost:5001/website-f5daf/europe-west3/api

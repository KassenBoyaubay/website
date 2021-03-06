const { admin, db } = require('../../util/admin')

const config = require('../../util/config')

const firebase = require('firebase')
firebase.initializeApp(config)

const { validateSignupData, validateLoginData, reduceUserDetails } = require("../../util/validators")
const { user } = require('firebase-functions/lib/providers/auth')

// Sign user up
exports.signup = (request, response) => {
    const newUser = {
        email: request.body.email,
        password: request.body.password,
        confirmPassword: request.body.confirmPassword,
        handle: request.body.handle,
    };

    const { valid, errors } = validateSignupData(newUser)

    if (!valid) return response.status(400).send(errors)

    const noImg = 'no-img.png'

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
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
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
                return response.status(500).send({ general: "Something went wrong, please try again" });
            }
        });
}

// Log user in
exports.login = (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password,
    };

    const { valid, errors } = validateLoginData(user)

    if (!valid) return response.status(400).send(errors)

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
            return response
                .status(403)
                .send({ general: "Wrong credentials, please try again" });
            // err.code === "auth/wrong-password" || "auth/user-not-found"
        });
}

// Add user details
exports.addUserDetails = (request, response) => {
    let userDetails = reduceUserDetails(request.body)

    db.doc(`/SocialMediaApp/pageA/users/${request.user.handle}`).update(userDetails)
        .then(() => {
            return response.send({ message: 'Details added successfully' })
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}

// Get any user's details
exports.getUserDetails = (request, response) => {
    let userData = {}
    db.doc(`/SocialMediaApp/pageA/users/${request.params.handle}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Document not found" })
            }
            userData.user = doc.data();
            return db.collection("SocialMediaApp").doc("pageA").collection('screams').where('userHandle', '==', request.params.handle).orderBy('createdAt', 'desc').get();
        })
        .then(data => {
            userData.screams = []
            data.forEach(doc => {
                userData.screams.push({
                    body: doc.data().body,
                    createdAt: doc.data().createdAt,
                    userHandle: doc.data().userHandle,
                    userImage: doc.data().userImage,
                    likeCount: doc.data().likeCount,
                    commentCount: doc.data().body,
                    screamId: doc.id
                })
            })
            return response.send(userData)
        })
        .catch(err => {
            console.err(err)
            return response.status(500).send({ error: err.code })
        })
}

// Get own user details
exports.getAuthenticatedUser = (request, response) => {
    let userData = {}
    db.doc(`/SocialMediaApp/pageA/users/${request.user.handle}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Document not found" })
            }
            userData.credentials = doc.data();
            return db.collection("SocialMediaApp").doc("pageA").collection('likes').where('userHandle', '==', request.user.handle).get();
        })
        .then(data => {
            userData.likes = []
            data.forEach(doc => {
                userData.likes.push(doc.data())
            })
            return db.collection("SocialMediaApp").doc("pageA").collection('notifications').where('recipient', '==', request.user.handle).orderBy('createdAt', 'desc').limit(10).get()
        })
        .then(data => {
            userData.notifications = []
            data.forEach(doc => {
                userData.notifications.push({
                    recipient: doc.data().recipient,
                    sender: doc.data().sender,
                    createdAt: doc.data().createdAt,
                    screamId: doc.data().screamId,
                    type: doc.data().type,
                    read: doc.data().read,
                    notificationId: doc.id
                })
            })
            return response.send(userData)
        })
        .catch(err => {
            console.err(err)
            return response.status(500).send({ error: err.code })
        })
}

// Upload image profile for user
exports.uploadImage = (request, response) => {
    const BusBoy = require('busboy')
    const path = require('path')
    const os = require('os')
    const fs = require('fs')


    const busboy = new BusBoy({ headers: request.headers })

    let imageFileName;
    let imageToBeUploaded = {};

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        //console.log(fieldname);
        //console.log(filename)
        //console.log(mimetype)
        if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return response.status(400).send({ error: 'Wrong file type submitted' })
        }
        // my.image.png -> get png
        const imageExtension = filename.split('.')[filename.split('.').length - 1]
        // 12414415168.png
        imageFileName = `${Math.round(Math.random() * 100000000)}.${imageExtension}`
        const filepath = path.join(os.tmpdir(), imageFileName)
        imageToBeUploaded = { filepath, mimetype }
        file.pipe(fs.createWriteStream(filepath))
    })
    busboy.on('finish', () => {
        admin.storage().bucket().upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: imageToBeUploaded.mimetype
                }
            }
        })
            .then(() => {
                const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`
                return db.doc(`/SocialMediaApp/pageA/users/${request.user.handle}`).update({ imageUrl })
            })
            .then(() => {
                return response.send({ message: 'Image uploaded successfully' })
            })
            .catch(err => {
                console.error(err)
                return response.status(500).send({ error: err.code })
            })
    })
    busboy.end(request.rawBody)
}

// Mark notification that it's read
exports.markNotificationsRead = (request, response) => {
    let batch = db.batch()
    request.body.forEach(notificationId => {
        const notificaiton = db.doc(`/SocialMediaApp/pageA/notifications/${notificationId}`)
        batch.update(notificaiton, { read: true })
    })
    batch.commit()
        .then(() => {
            return response.send({ message: 'notification marked read' })
        })
        .catch(err => {
            console.err(err)
            return response.status(500).send({ error: err.code })
        })
}
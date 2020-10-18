/* eslint-disable promise/no-nesting */
const { db } = require('../../util/admin')

exports.getAllScreams = (request, response) => {
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
                    userImage: doc.data().userImage
                });
            });
            return response.send(screams);
        })
        .catch((err) => console.log(err));
}

exports.postOneScream = (request, response) => {
    const newScream = {
        body: request.body.body,
        userHandle: request.user.handle,
        userImage: request.user.imageUrl,
        createdAt: new Date().toISOString(), // admin.firestore.Timestamp.fromDate(new Date())
        likeCount: 0,
        commentCount: 0
    };

    db.collection("SocialMediaApp")
        .doc("pageA")
        .collection("screams")
        .add(newScream)
        .then((doc) => {
            const resScream = newScream;
            resScream.screamId = doc.id;
            return response.send(resScream);
        })
        .catch((err) => {
            response.status(500).send({ error: "something went wrong" });
            console.log(err);
        });
}

// Fetch one scream
exports.getScream = (request, response) => {
    let screamData = {}
    db.doc(`/SocialMediaApp/pageA/screams/${request.params.screamId}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Scream not found" })
            }
            screamData = doc.data();
            screamData.screamId = doc.id;
            return db.collection("SocialMediaApp").doc("pageA").collection('comments').orderBy('createdAt', 'desc').where('screamId', '==', request.params.screamId).get()
        })
        .then(data => {
            screamData.comments = []
            data.forEach(doc => {
                screamData.comments.push(doc.data())
            })
            return response.send(screamData)
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}

// Make a comment
exports.commentOnScream = (request, response) => {
    if (request.body.body.trim() === '') return response.status(400).send({ comment: 'Comment must not be empty' })

    const newComment = {
        body: request.body.body,
        createdAt: new Date().toISOString(),
        screamId: request.params.screamId,
        userHandle: request.user.handle,
        userImage: request.user.imageUrl
    }

    db.doc(`/SocialMediaApp/pageA/screams/${request.params.screamId}`).get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Scream not found" })
            }
            return doc.ref.update({ commentCount: doc.data().commentCount + 1 })
        })
        .then(() => {
            return db.collection("SocialMediaApp").doc("pageA").collection('comments').add(newComment)
        })
        .then(() => {
            return response.send(newComment)
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}

// Like a scream
exports.likeScream = (request, response) => {
    const likeDocument = db.collection("SocialMediaApp").doc("pageA").collection('likes').where('userHandle', '==', request.user.handle).where('screamId', '==', request.params.screamId).limit(1)

    const screamDocument = db.doc(`/SocialMediaApp/pageA/screams/${request.params.screamId}`)

    let screamData = {}

    screamDocument.get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Scream not found" })
            }
            screamData = doc.data()
            screamData.screamId = doc.id
            return likeDocument.get()
        })
        .then(data => {
            if (data.empty) {
                return db.collection("SocialMediaApp").doc("pageA").collection('likes').add({
                    screamId: request.params.screamId,
                    userHandle: request.user.handle
                })
                    .then(() => {
                        screamData.likeCount++
                        return screamDocument.update({ likeCount: screamData.likeCount })
                    })
                    .then(() => {
                        return response.send(screamData)
                    })
            } else {
                return response.status(400).send({ error: 'Scream already liked' })
            }
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}

// Unlike a scream
exports.unlikeScream = (request, response) => {
    const likeDocument = db.collection("SocialMediaApp").doc("pageA").collection('likes').where('userHandle', '==', request.user.handle).where('screamId', '==', request.params.screamId).limit(1)

    const screamDocument = db.doc(`/SocialMediaApp/pageA/screams/${request.params.screamId}`)

    let screamData = {}

    screamDocument.get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Scream not found" })
            }
            screamData = doc.data()
            screamData.screamId = doc.id
            return likeDocument.get()
        })
        .then(data => {
            if (data.empty) {
                return response.status(400).send({ error: 'Scream already unliked' })
            } else {
                return db.doc(`/SocialMediaApp/pageA/likes/${data.docs[0].id}`).delete()
                    .then(() => {
                        screamData.likeCount--
                        return screamDocument.update({ likeCount: screamData.likeCount })
                    })
                    .then(() => {
                        return response.send(screamData)
                    })
            }
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}

// Delete a scream
exports.deleteScream = (request, response) => {
    const document = db.doc(`/SocialMediaApp/pageA/screams/${request.params.screamId}`)

    document.get()
        .then(doc => {
            if (!doc.exists) {
                return response.status(404).send({ error: "Scream not found" })
            }
            if (doc.data().userHandle !== request.user.handle) {
                return response.status(403).send({ error: "Unauthorized" })
            }
            return document.delete()
        })
        .then(() => {
            return response.send({ message: 'Scream deleted successfully' })
        })
        .catch(err => {
            console.error(err)
            return response.status(500).send({ error: err.code })
        })
}
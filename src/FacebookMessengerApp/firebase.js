import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsMgNzykVwgGgdy7ELsJ-SNirTapEdHCw",
  authDomain: "facebookmessengerapp.firebaseapp.com",
  databaseURL: "https://facebookmessengerapp.firebaseio.com",
  projectId: "facebookmessengerapp",
  storageBucket: "facebookmessengerapp.appspot.com",
  messagingSenderId: "377451655576",
  appId: "1:377451655576:web:212e1b48334c9326a7bbed",
  measurementId: "G-XPNKV3G5SZ",
});

const db = firebaseApp.firestore();

export default db;

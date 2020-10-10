import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

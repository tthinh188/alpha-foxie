import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN_UIF0vwA5bZFV5pUiAxVwgtqJc9YA4A",
  authDomain: "alpha-foxie-a6e5c.firebaseapp.com",
  projectId: "alpha-foxie-a6e5c",
  storageBucket: "alpha-foxie-a6e5c.appspot.com",
  messagingSenderId: "669175090065",
  appId: "1:669175090065:web:5ecf381ffdce3891c4a830",
  measurementId: "G-QKBFHVG525"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
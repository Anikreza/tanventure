import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYu6OfJZ9RMazcWjx5t5HEjozZPkehKpQ",
    authDomain: "portfolio-320020.firebaseapp.com",
    projectId: "portfolio-320020",
    storageBucket: "portfolio-320020.appspot.com",
    messagingSenderId: "452830446567",
    appId: "1:452830446567:web:8f31b5f32a36fd76fe3342",
    measurementId: "G-L0WV42QPX4"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, timestamp, db as default };
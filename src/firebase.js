import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJZY6XkZxVwkjJxfeQprcnpFqLDqONTp4",
  authDomain: "lets-chat-it-out.firebaseapp.com",
  projectId: "lets-chat-it-out",
  storageBucket: "lets-chat-it-out.appspot.com",
  messagingSenderId: "664262884420",
  appId: "1:664262884420:web:7f82a64c9a2ee281871011",
  measurementId: "G-9CCNK923GH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

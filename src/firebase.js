import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeL8JbBz9ljxbdHmEueXdh0v14RdV0ZZE",
  authDomain: "whatsapp-clone-e30c0.firebaseapp.com",
  projectId: "whatsapp-clone-e30c0",
  storageBucket: "whatsapp-clone-e30c0.appspot.com",
  messagingSenderId: "938066200764",
  appId: "1:938066200764:web:324cee15eaed734d6ba8b9",
  measurementId: "G-ME6XMRD19B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5wVmVjbH4fwpWVTwenN-nxsmqYQGJ3V0",
  authDomain: "ingelenet-2.firebaseapp.com",
  projectId: "ingelenet-2",
  storageBucket: "ingelenet-2.firebasestorage.app",
  messagingSenderId: "139530323062",
  appId: "1:139530323062:web:19a3db5df325789d660b57",
  measurementId: "G-LHWXEP76FK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };





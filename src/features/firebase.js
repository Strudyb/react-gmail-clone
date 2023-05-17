import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuTjqk-J13OyJ0PiqzilugM66X1l1l7N4",
  authDomain: "clone-8ab9a.firebaseapp.com",
  projectId: "clone-8ab9a",
  storageBucket: "clone-8ab9a.appspot.com",
  messagingSenderId: "292796220617",
  appId: "1:292796220617:web:721e846e4e72792fa43918",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };

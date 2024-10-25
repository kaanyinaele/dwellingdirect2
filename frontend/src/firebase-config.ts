// src/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyCmYLjojdYcYmPDZSzW_xOVQXoweiFIJuQ',
  authDomain: "dwellingdirectauth.firebaseapp.com",
  projectId: 'dwellingdirectauth',
  storageBucket: "dwellingdirectauth.appspot.com",
  messagingSenderId: "434181281564",
  appId: "1:434181281564:web:75fa599056f54e893e8cd9",
  measurementId: "G-R6BT6FMJR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);

export { auth, googleProvider };

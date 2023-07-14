// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFBDaRnwM6AxfLj71Znr9bnhHlrmmBSJg",
  authDomain: "book-catelog.firebaseapp.com",
  projectId: "book-catelog",
  storageBucket: "book-catelog.appspot.com",
  messagingSenderId: "700439619669",
  appId: "1:700439619669:web:4ac383bde39628b885ccdc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

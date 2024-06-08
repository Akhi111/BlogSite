// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsite-mern.firebaseapp.com",
  projectId: "blogsite-mern",
  storageBucket: "blogsite-mern.appspot.com",
  messagingSenderId: "308124218799",
  appId: "1:308124218799:web:f80780da32d2543feeeb5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
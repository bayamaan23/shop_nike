// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAkVcN6YV3rszCAtVpmUGsdK3YA4GKJhg",
  authDomain: "shop-d8bcb.firebaseapp.com",
  projectId: "shop-d8bcb",
  storageBucket: "shop-d8bcb.appspot.com",
  messagingSenderId: "1087381004220",
  appId: "1:1087381004220:web:6deea808ce3cde810815b9",
  measurementId: "G-BCF3L4JHBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
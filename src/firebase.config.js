// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVrtPfXZxYT26U6jo8YPC_yTrRnXZ5_LI",
  authDomain: "dilsekhana-a158a.firebaseapp.com",
  projectId: "dilsekhana-a158a",
  storageBucket: "dilsekhana-a158a.appspot.com",
  messagingSenderId: "38491830423",
  appId: "1:38491830423:web:06c0a9fa65a7a7ea3351d2",
  measurementId: "G-9YZ36559LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
export const database = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

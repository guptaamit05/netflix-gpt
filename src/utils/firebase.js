// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxseTb5Xbnir-RjvjGrNfb2IQueXZawUI",
  authDomain: "netflixgpt-ecff3.firebaseapp.com",
  projectId: "netflixgpt-ecff3",
  storageBucket: "netflixgpt-ecff3.appspot.com",
  messagingSenderId: "116309937651",
  appId: "1:116309937651:web:14b218e90023f14b5a9686",
  measurementId: "G-FFPRY1MVL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDklNcxBq6G6-DSuqEu3kx-AACXKtRXWlQ",
  authDomain: "netflixgpt-497e5.firebaseapp.com",
  projectId: "netflixgpt-497e5",
  storageBucket: "netflixgpt-497e5.firebasestorage.app",
  messagingSenderId: "1093127432171",
  appId: "1:1093127432171:web:ab3cb5634b7c9d2c221bae",
  measurementId: "G-RRSKTWEQHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
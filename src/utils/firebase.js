// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSqa5_wFVgfV5zX2nwWge1j50plagksuk",
  authDomain: "netflixgpt-597f6.firebaseapp.com",
  projectId: "netflixgpt-597f6",
  storageBucket: "netflixgpt-597f6.appspot.com",
  messagingSenderId: "715016111797",
  appId: "1:715016111797:web:b10046f0d5deddb9a820fc",
  measurementId: "G-KTDHR1STG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

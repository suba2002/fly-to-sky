// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCETNua3tuSjNWzQ_6tV7UTutoePyTb5rw",
  authDomain: "fly-to-sky-71c79.firebaseapp.com",
  projectId: "fly-to-sky-71c79",
  storageBucket: "fly-to-sky-71c79.appspot.com",
  messagingSenderId: "1098214197228",
  appId: "1:1098214197228:web:38072c0fba0aa69d6162c9",
  measurementId: "G-T6WF26JTWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

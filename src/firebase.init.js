// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmHozBEkHC7xBwR65bIcXmDbIYFbF8EiE",
    authDomain: "tech-geeks-firebase-auth-2577c.firebaseapp.com",
    projectId: "tech-geeks-firebase-auth-2577c",
    storageBucket: "tech-geeks-firebase-auth-2577c.appspot.com",
    messagingSenderId: "908104950704",
    appId: "1:908104950704:web:f991ba34da063080ca2c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;
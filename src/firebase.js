// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATEAQiyy6EZLD3cU6a8ofBqXfEabIIGcY",
    authDomain: "easybag-poc.firebaseapp.com",
    projectId: "easybag-poc",
    storageBucket: "easybag-poc.firebasestorage.app",
    messagingSenderId: "11858550562",
    appId: "1:11858550562:web:984a2cb62e471ef6eecf7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
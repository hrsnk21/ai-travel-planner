import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "yourapi",
    authDomain: "wanderwise-8c584.firebaseapp.com",
    projectId: "wanderwise-8c584",
    storageBucket: "wanderwise-8c584.firebasestorage.app",
    messagingSenderId: "193226642901",
    appId: "1:193226642901:web:0cc5de98b0672e6679195c",
    measurementId: "G-ZSHJJXGPLX",
    databaseURL: "https://wanderwise-8c584-default-rtdb.firebaseio.com/:null"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Ensure persistence
setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Failed to set auth persistence:", error);
});

export { app, auth, googleProvider, signInWithPopup, signOut };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTYDHlf7--LQekye8naoh3iGpYvQpkDb8",
    authDomain: "real-chat-c8d21.firebaseapp.com",
    projectId: "real-chat-c8d21",
    storageBucket: "real-chat-c8d21.appspot.com",
    messagingSenderId: "868860883577",
    appId: "1:868860883577:web:525ebccb1696261831daa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
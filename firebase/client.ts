// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHIkI4M1mvjmJlh5z4TJAeoMSiMip4JdI",
  authDomain: "aceview-83bbc.firebaseapp.com",
  projectId: "aceview-83bbc",
  storageBucket: "aceview-83bbc.firebasestorage.app",
  messagingSenderId: "162599243245",
  appId: "1:162599243245:web:a656a0596e045aaafcebe4",
  measurementId: "G-PGB9XTQH0S"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);

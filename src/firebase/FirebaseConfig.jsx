// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXd_YOdNuIJxPENNsSl1J22i7kG83d9hs",
  authDomain: "e-comm-e3a85.firebaseapp.com",
  projectId: "e-comm-e3a85",
  storageBucket: "e-comm-e3a85.appspot.com",
  messagingSenderId: "523222832597",
  appId: "1:523222832597:web:f64b2fd8efd80dd3f9d95c",
  measurementId: "G-T2ZN6PQP4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }

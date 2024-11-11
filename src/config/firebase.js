import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCU563BJ6Lwb533rfjVYuLq-xYNdC51G2g",
  authDomain: "fir-course-d7343.firebaseapp.com",
  projectId: "fir-course-d7343",
  storageBucket: "fir-course-d7343.firebasestorage.app",
  messagingSenderId: "91746781510",
  appId: "1:91746781510:web:97a351025ffa770c053d47",
  measurementId: "G-PTYK56FNS6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

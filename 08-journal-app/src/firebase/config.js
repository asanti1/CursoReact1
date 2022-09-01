import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB3oBvEOuzjz36O9ZE-VXUJwCI-fXNGrWw",
  authDomain: "react-curso-f74d7.firebaseapp.com",
  projectId: "react-curso-f74d7",
  storageBucket: "react-curso-f74d7.appspot.com",
  messagingSenderId: "976458630046",
  appId: "1:976458630046:web:ee8c10f8b5f28fe7368c8f",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

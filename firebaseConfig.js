// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwNxQbSbusw0aWJ1T485v8I4ggY94JSFs",
  authDomain: "find-friend-app-b7ab6.firebaseapp.com",
  projectId: "find-friend-app-b7ab6",
  storageBucket: "find-friend-app-b7ab6.appspot.com",
  messagingSenderId: "475087850692",
  appId: "1:475087850692:web:1e59dd212155e7dd1a4d91",
  measurementId: "G-LDDD8KRLMQ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIReSTORE_DB = getFirestore(FIREBASE_APP)

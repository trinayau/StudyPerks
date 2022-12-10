// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYz--dQbfbUGBgQLklkVf5pNrgIsTPJ1A",
  authDomain: "studyperks1.firebaseapp.com",
  projectId: "studyperks1",
  storageBucket: "studyperks1.appspot.com",
  messagingSenderId: "421667814849",
  appId: "1:421667814849:web:3b196046d950593a02c340",
  measurementId: "G-F8FFQMNCT3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);

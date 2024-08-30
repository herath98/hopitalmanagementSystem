// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hospitalmnagment.firebaseapp.com",
  projectId: "hospitalmnagment",
  storageBucket: "hospitalmnagment.appspot.com",
  messagingSenderId: "414059916539",
  appId: "1:414059916539:web:d4008c60ff6f606e14145e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
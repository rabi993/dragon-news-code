// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIisYFfebfwnVJU4iXhX65afMEEKJ4z-s",
  authDomain: "dragon-news-5a68b.firebaseapp.com",
  projectId: "dragon-news-5a68b",
  storageBucket: "dragon-news-5a68b.firebasestorage.app",
  messagingSenderId: "125071678302",
  appId: "1:125071678302:web:61d6ecf7166a62768d4dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
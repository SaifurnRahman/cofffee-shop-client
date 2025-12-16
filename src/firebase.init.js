// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM5cjxta8ULLk6x_ooJiNjxj-5qB1c0Zk",
  authDomain: "coffee-store-app-3de8e.firebaseapp.com",
  projectId: "coffee-store-app-3de8e",
  storageBucket: "coffee-store-app-3de8e.firebasestorage.app",
  messagingSenderId: "1005699859084",
  appId: "1:1005699859084:web:409cb13d8d45f12bf2f1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
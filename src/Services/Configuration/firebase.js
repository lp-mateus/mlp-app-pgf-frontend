// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-DOcXVdK46nQtyjSqdInvK0hS3AqEiBE",
  authDomain: "mlp-pgf-backend.firebaseapp.com",
  projectId: "mlp-pgf-backend",
  storageBucket: "mlp-pgf-backend.appspot.com",
  messagingSenderId: "310416146764",
  appId: "1:310416146764:web:aaa5032ebe133e37e38fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

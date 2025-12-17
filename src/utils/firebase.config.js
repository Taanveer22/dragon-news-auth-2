// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEuLr-VNaMP8NNUwX3e1VBt4h6L8jhS4",
  authDomain: "dragon-news-auth-2-85d25.firebaseapp.com",
  projectId: "dragon-news-auth-2-85d25",
  storageBucket: "dragon-news-auth-2-85d25.firebasestorage.app",
  messagingSenderId: "827543885158",
  appId: "1:827543885158:web:c057b5b6060bbf4127a4a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

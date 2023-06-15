// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDofjXDWVH-_4gpv3skAxxOBVca2vPWrf0",
  authDomain: "hostelworld-389523.firebaseapp.com",
  projectId: "hostelworld-389523",
  storageBucket: "hostelworld-389523.appspot.com",
  messagingSenderId: "45889513825",
  appId: "1:45889513825:web:a25c3a6f5879808e66bd20",
  measurementId: "G-KFNNSH4ZJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
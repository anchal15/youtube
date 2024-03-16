// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP1uhU8yrTXMFKBxxj5QnHtPcvzCvyx7k",
  authDomain: "fir-2cbb7.firebaseapp.com",
  projectId: "fir-2cbb7",
  storageBucket: "fir-2cbb7.appspot.com",
  messagingSenderId: "95208986376",
  appId: "1:95208986376:web:5d6c3cb0b368468a873ebd",
  measurementId: "G-W6PFCWERXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

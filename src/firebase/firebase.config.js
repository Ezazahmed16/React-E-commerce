import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpmLiNnhCDbmm4-eal7Q7_PUkcpKJsNg",
  authDomain: "e-commerce-season.firebaseapp.com",
  projectId: "e-commerce-season",
  storageBucket: "e-commerce-season.appspot.com",
  messagingSenderId: "779652183229",
  appId: "1:779652183229:web:5eeac2a78c2c01478833d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsapp-3d0b9.firebaseapp.com",
  projectId: "blogsapp-3d0b9",
  storageBucket: "blogsapp-3d0b9.firebasestorage.app",
  messagingSenderId: "563560422430",
  appId: "1:563560422430:web:396e9bd3ab6441c4de620f",
  measurementId: "G-E85XLBS1LT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

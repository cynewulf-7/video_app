import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO2h3kGq38PiYPh678VSeYDlROc1F9kz8",
  authDomain: "video-4d4e8.firebaseapp.com",
  projectId: "video-4d4e8",
  storageBucket: "video-4d4e8.appspot.com",
  messagingSenderId: "640067367181",
  appId: "1:640067367181:web:5700a1447503e334bc4044"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
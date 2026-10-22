import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyAxXpdDcRnixPjYupQ1qUsSFRNvGCSXXts",
    authDomain: "chisendposproduction012.firebaseapp.com",
    databaseURL: "https://chisendposproduction012-default-rtdb.firebaseio.com",
    projectId: "chisendposproduction012",
    storageBucket: "chisendposproduction012.firebasestorage.app",
    messagingSenderId: "538309732585",
    appId: "1:538309732585:web:23cb2869adb37115972878",
    measurementId: "G-95PWEN24HY"
  };


const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };



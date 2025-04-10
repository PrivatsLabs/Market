import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBuh0zuSs2AlfpJYx1RLFYYaHt9rmtXJP0",
    authDomain: "market-a4929.firebaseapp.com",
    projectId: "market-a4929",
    storageBucket: "market-a4929.firebasestorage.app",
    messagingSenderId: "155285295494",
    appId: "1:155285295494:web:431fda6bc09f8ebecc1c07"
  };

// Initialisation de Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exportation des services Firebase
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Importez les modules nécessaires de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase (remplacez par vos propres valeurs)
const firebaseConfig = {
    apiKey: "AIzaSyBuh0zuSs2AlfpJYx1RLFYYaHt9rmtXJP0",
    authDomain: "market-a4929.firebaseapp.com",
    projectId: "market-a4929",
    storageBucket: "market-a4929.firebasestorage.app",
    messagingSenderId: "155285295494",
    appId: "1:155285295494:web:431fda6bc09f8ebecc1c07"
};

// Initialisez Firebase
const app = initializeApp(firebaseConfig);

// Exportez Firestore pour l'utiliser dans votre projet
const db = getFirestore(app);

export { db };
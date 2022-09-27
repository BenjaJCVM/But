import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, query, getDocs, where } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGflydcapcbC9I2W22UX-Cnc1VMW3mxuE",
    authDomain: "butstore-3c59e.firebaseapp.com",
    projectId: "butstore-3c59e",
    storageBucket: "butstore-3c59e.appspot.com",
    messagingSenderId: "781041211550",
    appId: "1:781041211550:web:02d1b788047e68cc72038f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getTodaRopa = async () => {
  const q = query(collection(db, 'ropa'));
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map(doc =>({ id: doc.id, ...doc.data() }))
  return dataFromFirestore
};

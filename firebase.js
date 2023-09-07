import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDaLUugThhoKnPcZqbT5KBpIyKvbjLe0zY",
  authDomain: "triana-bares-87bd9.firebaseapp.com",
  projectId: "triana-bares-87bd9",
  storageBucket: "triana-bares-87bd9.appspot.com",
  messagingSenderId: "204771261554",
  appId: "1:204771261554:web:c7f0f59f2640c12e61d6eb",
  measurementId: "G-RMK0CCXC1K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}




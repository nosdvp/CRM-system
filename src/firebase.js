import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";      
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDM9UuN42azW-eV8-afMSygMM6NdHeqiJk",
  authDomain: "casinocrm-56066.firebaseapp.com",
  projectId: "casinocrm-56066",
  storageBucket: "casinocrm-56066.firebasestorage.app",
  messagingSenderId: "823328301295",
  appId: "1:823328301295:web:bdf462a1b6a6b2276afb1a",
  measurementId: "G-FBJ3PS0G89"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);   
export const db = getFirestore(app);
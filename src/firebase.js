import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Подключаем модуль аутентификации
import { getFirestore } from "firebase/firestore"; // Подключаем базу данных

const firebaseConfig = {
  apiKey: "ТВОЙ_API_KEY",
  authDomain: "ТВОЙ_PROJECT_ID.firebaseapp.com",
  projectId: "ТВОЙ_PROJECT_ID",
  storageBucket: "ТВОЙ_PROJECT_ID.appspot.com",
  messagingSenderId: "ТВОЙ_SENDER_ID",
  appId: "ТВОЙ_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
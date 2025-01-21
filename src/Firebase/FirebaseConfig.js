import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAojJ8KcQWqDZx_UGT4adJSY02saI4UNFg",
  authDomain: "spodcast-17e6f.firebaseapp.com",
  databaseURL: "https://spodcast-17e6f-default-rtdb.firebaseio.com",
  projectId: "spodcast-17e6f",
  storageBucket: "spodcast-17e6f.firebasestorage.app",
  messagingSenderId: "302639795590",
  appId: "1:302639795590:web:b0e1b051ac016b48477007",
  measurementId: "G-LVBQKLZXJQ"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);

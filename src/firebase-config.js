import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAYkVrs1hSf2zZ4C0iTLWHv6_M1pfomk8",
  authDomain: "galaxy-b3155.firebaseapp.com",
  databaseURL: "https://galaxy-b3155-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "galaxy-b3155",
  storageBucket: "galaxy-b3155.appspot.com",
  messagingSenderId: "191638499913",
  appId: "1:191638499913:web:81f5a38f1871c173a20598",
  measurementId: "G-TQTEMT51HP"
};
// const database = getDatabase(app);
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

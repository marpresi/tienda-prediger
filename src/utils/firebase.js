import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyUNNA6mI041zI_gGG3_iBKI8tRjVYrA0",
  authDomain: "reactcoderhouse-b503b.firebaseapp.com",
  projectId: "reactcoderhouse-b503b",
  storageBucket: "reactcoderhouse-b503b.appspot.com",
  messagingSenderId: "1079569559001",
  appId: "1:1079569559001:web:8b9191f2c230a3ef40bdc8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
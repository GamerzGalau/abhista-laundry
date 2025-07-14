// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAg2mhpdg3DH4fJGm2626_2-ysvsXKHRFg",
  authDomain: "abhista-laundry.firebaseapp.com",
  projectId: "abhista-laundry",
  storageBucket: "abhista-laundry.appspot.com",
  messagingSenderId: "784467467337",
  appId: "1:784467467337:web:c81cb521dc477b8dc07398",
  databaseURL: "https://abhista-laundry-default-rtdb.asia-southeast1.firebasedatabase.app"
};

export const app = initializeApp(firebaseConfig);

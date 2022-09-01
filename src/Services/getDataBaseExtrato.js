import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase.js';

// Método GET na collection users para renda
const user_ID = localStorage.getItem('userID');
const docRef = doc(db, "users", user_ID);

export const getDataBaseExtrato = async () => {
    const request = await getDoc(docRef);
    if (request.exists()) {
        console.log("Document data:", request.data().renda);
        localStorage.setItem('userRenda', request.data().renda);
      } else {
        console.log("No such document!");
      }
}



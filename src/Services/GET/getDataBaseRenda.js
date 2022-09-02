// Firebase
import { doc, getDoc } from "firebase/firestore";
import { db } from '../Configuration/firebase.js';

 // Método GET collection (USERS) renda
export const getDataBaseRenda = async () => {
    // Conexão BD
    const user_ID = localStorage.getItem('userID');
    const docRef = doc(db, "users", user_ID);

    // Request
    const request = await getDoc(docRef);
    if (request.exists()) {
        console.log("Document data:", request.data().renda);
        localStorage.setItem('userRenda', request.data().renda);
    } else {
        console.log("No such document!");
    }
}

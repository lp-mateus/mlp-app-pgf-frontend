import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase.js';

// Método GET collection (DESPESA) userID
export const getDataBaseDespesa = async () => {
    // Auxiliar
    const result = [];

    // Conexão com BD
    const user_ID = localStorage.getItem('userID');
    const q = query(collection(db, "despesa"), where("userID", "==", user_ID));

    // Request
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        // retorna informações de despesa
        result.push(doc.data());
        console.log("Resultado:", result);
    });

    // Salvando localStorage
    //localStorage.setItem('userDespesas', result);

}




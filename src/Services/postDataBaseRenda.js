// Firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Método UPDATE na collection (users) funcionalidade adicionar renda mensal
export const postDataBaseRenda = async function(dados) {
    // Conexão com o BD
    const user_ID = localStorage.getItem('userID');
    const collectionRef = doc(db, 'users', user_ID);

    // Request
    await updateDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);

    // mensagem
    alert("Renda mensal adicionada com sucesso!");
    window.location.replace('/menu');
}


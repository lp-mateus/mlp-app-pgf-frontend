// Firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// Método UPDATE na collection (users) funcionalidade adicionar renda mensal
const user_ID = localStorage.getItem('userID');

// Conexão com o BD
const collectionRef = doc(db, 'users', user_ID);

// Método POST em uma collection do BD
export const postDataBaseRenda = async function(dados) {
    await updateDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);
    // mensagem
    alert("Renda mensal adicionada com sucesso!");
    window.location.replace('/menu');
}


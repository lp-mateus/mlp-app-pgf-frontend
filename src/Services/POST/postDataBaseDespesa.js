// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Configuration/firebase.js";

// Método POST na collection (despesa) funcionalidade adicionar despesa
export const postDataBaseDespesa = async function(dados) {
    // Conexão com o BD
    const collectionRef = collection(db, "despesa"); 
    
    // Request
    await addDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);

    // mensagem
    alert("Despesa adicionada com sucesso!");
    window.location.replace('/menu');
}

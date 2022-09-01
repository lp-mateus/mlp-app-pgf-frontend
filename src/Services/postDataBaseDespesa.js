// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Método POST na collection (despesa) funcionalidade adicionar despesa

// Conexão com o BD
const collectionRef = collection(db, "despesa"); 

// Método POST em uma collection do BD
export const postDataBaseDespesa = async function(dados) {
    await addDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);
    // mensagem
    alert("Despesa adicionada com sucesso!");
    window.location.replace('/menu');
}


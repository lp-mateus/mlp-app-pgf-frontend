// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Conexão com o BD
const collectionRef = collection(db, "financeiro");

// Método POST em uma collection do BD
export const postDataBaseFinanceiro = async function(dados) {
    await addDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);
    // mensagem
    alert("Renda adicionada com sucesso!");
    window.location.replace('/menu');
}





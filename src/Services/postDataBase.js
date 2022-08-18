// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Conexão com o BD
const collectionRef = collection(db, "users");

// Método POST em uma collection do BD
export const postDataBase = async function(dados) {
    await addDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);
    // mensagem
    alert("Cadastro realizado com sucesso!");
    window.location.replace('/menu');
}





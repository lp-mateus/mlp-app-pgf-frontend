// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Configuration/firebase.js";

// Método POST em uma collection do BD
export const postDataBaseCadastro = async function(dados) {
    // Conexão com o BD
    const collectionRef = collection(db, "users");

    // Request
    await addDoc(collectionRef, dados);
    console.log("Document written with ID: ", collectionRef.id);

    // Mensagem
    alert("Cadastro realizado com sucesso!");
    window.location.replace('/menu');
}

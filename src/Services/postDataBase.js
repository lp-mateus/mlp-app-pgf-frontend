// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export function postDataBase(dados) {
    // Dados do formulário
    console.log("Data", dados);

    // Conexão com o BD
    const collectionRef = collection(db, "users");

    // Método POST em uma collection do BD
    const postData = async function() {
        await addDoc(collectionRef, dados);
        console.log("Document written with ID: ", collectionRef.id);
    }

    // Main
    postData();

}




// Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase.js';

// método GET em uma collection do BD
export const getDataBase = async function(credentials) {
    // conexão com o BD
    const queryCollection = query(collection(db, "users"), where("email", "==", credentials));

    // requisição ao BD
    const request = await getDocs(queryCollection);

    // verifica credenciais
    console.log(request.docs);
    if(request.docs.length === 0){
        alert("E-mail ou Senha inválidos!");
    }else{
        // login com sucesso armazena os dados do user
        request.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);

            // salvando dados no local storage
            localStorage.setItem("userName", doc.data().name);
            localStorage.setItem("userEmail", doc.data().email);
            localStorage.setItem("userCPF", doc.data().cpf);
            localStorage.setItem("keyLogin", true);

            // mensagem
            alert("Login realizado com sucesso!");
            window.location.replace("/menu");

        })
    }
}






// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase.js';

export function getDataBase() {

    // conexão com o BD
    const queryCollection = collection(db, "users");

    // método GET em uma collection do BD
    const getData = async function() {
        const request = await getDocs(queryCollection);
        request.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            // salvando dados no local storage
            localStorage.setItem("userName", doc.data().name);
            localStorage.setItem("userEmail", doc.data().email);
            localStorage.setItem("userCPF", doc.data().cpf);
        })
    }

    // Main
    getData();

}





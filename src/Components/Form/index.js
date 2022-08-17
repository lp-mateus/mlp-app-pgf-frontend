// React Hooks
import { useState } from 'react';

// Services
//import { getDataBase } from '../../Services/getDataBase.js';
//import { postDataBase } from '../../Services/postDataBase.js'; 
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Services/firebase.js';


// Style
import './style.css';

export function FormCadastro() {
    // Logica dos inputs do formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submission prevented");
    }

    // Declaração dos states para cada input
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [datebirth, setDateBirth] = useState("");
    const [password, setPassword] = useState("");

    // Prototipação do objeto de dados POST
    const dados = {
        name: nome,
        email: email,
        cpf: Number(cpf),
        birth: datebirth,
        password: password
    }

    // Firebase Service
    // Conexão com o BD
    const usersCollectionRef = collection(db, "users");
    // Método POST em uma collection do BD
    const createUser = async () => {
        await addDoc(usersCollectionRef, dados);
        alert("Cadastro realizado com sucesso!");
        // Simulate an HTTP redirect:
        window.location.replace('/menu');
    }

    return(
        <>
        <form className="login" onSubmit={handleSubmit}>
            <label>Nome</label>
            <br></br>
            <input required name="nome" type="text" auto-complete="name" place-holder="Insira seu nome completo..." onChange={(event) => {setNome(event.target.value)}}>
            </input>
            <br></br>

            <label>CPF</label>
            <br></br>
            <input required name="cpf" type="number" place-holder="Insria seu CPF..." onChange={(event) => {setCPF(event.target.value)}}>                    
            </input>
            <br></br>

            <label>E-mail</label>
            <br></br>
            <input required name="email" type="email" auto-complete="email" place-holder="nome@email.com" onChange={(event) => {setEmail(event.target.value)}}>
            </input>
            <br></br>

            <label>Data de nascimento</label>
            <br></br>
            <input required name="date" type="date" onChange={(event) => {setDateBirth(event.target.value)}}>
            </input>
            <br></br>

            <label>Senha</label>
            <br></br>
            <input 
                name="senha"
                required
                type="password" 
                minLength="8"
                auto-complete="on"
                place-holder="Insria uma senha..."
                onChange={(event) => {setPassword(event.target.value)}}
            ></input>       
            <br></br>                         
        </form>
        <br></br>  
        <button 
            type='button' 
            onClick={createUser}
        >Cadastar</button>
        <br></br>
        </>
    )
}






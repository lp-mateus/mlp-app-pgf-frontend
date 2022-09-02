// React Hooks
import { useState } from 'react';

// Services
import { postDataBaseCadastro } from '../../Services/POST/postDataBaseCadastro.js';

// Style
import './style.css';

export function FormCadastro() {

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

    // Método POST do forms
    const handleCadastro = (event) => {
        event.preventDefault();
        postDataBaseCadastro(dados);
    }

    return(
        <>
        <form id='form-cadastro' className="login" onSubmit={handleCadastro}>
            <label>Nome</label>
            <br></br>
            <input required name="nome" type="text" placeholder="Insira seu nome completo..." onChange={(event) => {setNome(event.target.value)}}>
            </input>
            <br></br>

            <label>CPF</label>
            <br></br>
            <input required name="cpf" type="number" placeholder="Insria seu CPF..." onChange={(event) => {setCPF(event.target.value)}}>                    
            </input>
            <br></br>

            <label>E-mail</label>
            <br></br>
            <input required name="email" type="email" autocomplete="email" placeholder="nome@email.com" onChange={(event) => {setEmail(event.target.value)}}>
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
                required
                name="senha"                
                type="password" 
                minlength="8"
                placeholder="Insria uma senha..."
                onChange={(event) => {setPassword(event.target.value)}}
            ></input>       
            <br></br>                         
        </form>
        <br></br>  
        <button type='submit' form='form-cadastro'>Cadastar</button>
        <br></br>
        </>
    )
}


// React
import { useState } from "react";

// Services
import { postDataBaseDespesa } from "../../Services/postDataBaseDespesa";

// Styles
const styleTitulo = {
    width: "100%",
    marginTop: "8em",
    textAlign: "center",
}

const styleCenter = {
    width: "100%",
    textAlign: "center"
}

export function PageDespesa() {
    // Recuperando dos dados localstorage
    const session_user_ID = localStorage.getItem('userID');
    const session_user_email = localStorage.getItem('userEmail');
    const session_user_cpf = localStorage.getItem('userCPF');

    // Tratando inputs do formulário
    const [despesa, setDespesa] = useState(0);
    const [description, setDescription] = useState("");

    // Método POST do forms
    const handleSubmit = (event) => {
        event.preventDefault();

        // captura data atual do submit
        let today = new Date();
        today = today.toLocaleDateString();
        
        // prototipa dados do input
        const dados = {
            userID: session_user_ID,
            description: description,
            despesa: Number(despesa),
            data: String(today),
        }

        // serviço firebase
        postDataBaseDespesa(dados);
    }

    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">
                    <p>PGFMLP</p>
                    <p>{session_user_email}</p>       
                    <p>{session_user_cpf}</p>    
                </div>                         
                <br></br>   
                <br></br>   
                <br></br>   
                <h1>DESPESA</h1>
            </section>

            <br></br>
            <br></br>
            <br></br>

            <div style={styleTitulo}> 
                <h3>INFORMAÇÕES</h3>
                <hr></hr>
            </div>

            <form id='form-renda' className="login" onSubmit={handleSubmit}>
                <label>Descrição da dispesa</label>
                <br></br>
                <input required name="description" type="string" placeholder="Exemplo: Conta de água" onChange={(event) => {setDescription(event.target.value)}}>
                </input>
                <br></br>  
                <label>Insira o valor da dispesa</label>
                <br></br>
                <input required name="despesa" type="number" placeholder="Exemplo: R$250,00" onChange={(event) => {setDespesa(event.target.value)}}>
                </input>
                <br></br>                       
            </form>
            <br></br>
            <div style={styleCenter}>
                <button type='submit' form='form-renda'>ADICIONAR</button>
            </div>
        </>
    )
}







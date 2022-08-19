// React
import { useState } from "react";

// Services
import { postDataBaseFinanceiro } from "../../Services/postDataBaseFinanceiro";

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

export function PageRenda() {
    // Recuperando dos dados localstorage
    const session_user_ID = localStorage.getItem('userID');
    const session_user_email = localStorage.getItem('userEmail');
    const session_user_cpf = localStorage.getItem('userCPF');

    // Tratando inputs do formulário
    const [renda, setRenda] = useState(0);

    // Método POST do forms
    const handleSubmit = (event) => {
        event.preventDefault();

        // captura data atual do submit
        let today = new Date();
        today = today.toLocaleDateString();
        
        // prototipa dados do input
        const dados = {
            userID: session_user_ID,
            renda: renda,
            data: String(today),
        }

        // serviço firebase
        postDataBaseFinanceiro(dados);
    }

    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">
                    <p>Conta de acesso</p>
                    <p>{session_user_email}</p>       
                    <p>{session_user_cpf}</p>    
                </div>                         
                <br></br>   
                <br></br>   
                <br></br>   
                <h1>RENDA</h1>
            </section>

            <br></br>
            <br></br>
            <br></br>

            <div style={styleTitulo}> 
                <h3>INFORMAÇÕES</h3>
                <hr></hr>
            </div>

            <form id='form-renda' className="login" onSubmit={handleSubmit}>
                <label>Adicione sua renda mensal</label>
                <br></br>
                <input required name="renda" type="number" placeholder="Exemplo: R$1575,95" onChange={(event) => {setRenda(event.target.value)}}>
                </input>
                <br></br>                       
            </form>
            <br></br>
            <div style={styleCenter}>
                <button type='submit' form='form-renda'>Adicionar</button>
            </div>
        </>
    )
}






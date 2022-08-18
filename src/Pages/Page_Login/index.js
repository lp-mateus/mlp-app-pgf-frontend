// React Hooks
import { useState } from 'react';

// Services
import { getDataBase } from '../../Services/getDataBase';

// Components
import { Header } from '../../Components/Header';

// Styles
const styleAlign = {
    textAlign: "center",
}

const styleCenter = {
    width: "100%",
    textAlign: "center"
}

export function PageLogin() {
    // Declaração dos states para cada input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        getDataBase(email);
    }

    return(
        <>
        <Header />

        <br></br>
        <br></br>
        <br></br>

        <h3 style={styleAlign}>LOGIN</h3>
        <hr></hr>

        <form id='form-login' className="login" onSubmit={handleLogin}>
            <label>E-mail</label>
            <br></br>
            <input required name="email" type="email" autocomplete="email" placeholder="nome@email.com" onChange={(event) => {setEmail(event.target.value)}}>
            </input>
            <br></br>

            <label>Senha</label>
            <br></br>
            <input 
                name="senha"
                required
                type="password" 
                minlength="8"
                placeholder="Insria uma senha..."
                onChange={(event) => {setPassword(event.target.value)}}
            ></input>       
            <br></br>                         
        </form>

        <br></br>  

        <div style={styleCenter}>
            <button type='submit' form='form-login'>Login</button>
            <p>Esqueci minha senha!</p>
        </div>
        <br></br>
        </>
    )
}






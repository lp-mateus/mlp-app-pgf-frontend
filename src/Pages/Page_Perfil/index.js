// React
import { NavLink } from "react-router-dom";

// CSS
import './style.css';
import IconUser from '../../Images/profile.png';

// Style
const styleCenter = {
    width: "100%",
    textAlign: "center"
}

export function PagePerfil() {
    // Recuperando dos dados localstorage
    const session_user_name = localStorage.getItem('userName');
    const session_user_email = localStorage.getItem('userEmail');
    const session_user_cpf = localStorage.getItem('userCPF');

    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">   
                    <p>PGFMLP</p>                   
                    <p>Olá, bem-vindo de volta!</p>  
                    <img src={IconUser} alt="icone-usuario"></img>            
                </div>
                <br></br>  
                <br></br>
                <br></br> 
                <h1>PERFIL</h1>
            </section>
            <br></br>
            <section className="perfil-infos">
                <br></br>
                <h3>INFORMAÇÕES</h3>
                <hr></hr>
                <br></br>
                <p>E-mail: {session_user_email}</p>
                <p>Nome: {session_user_name}</p>
                <p>CPF: {session_user_cpf}</p>                
                <br></br>
                <br></br>
                <br></br>                
            </section>
            <br></br>
            <div style={styleCenter}>
                <NavLink to="/menu">
                    <button>MENU</button>
                </NavLink>
            </div>
        </>
    )
}

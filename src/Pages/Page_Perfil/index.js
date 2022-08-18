// React
import { NavLink } from "react-router-dom";

// Componentes
import { DefaultButton } from '../../Components/Button';

// CSS
import './style.css';
import IconUser from '../../Images/profile.png';

export function PagePerfil() {
    // Recuperando dos dados localstorage
    const session_user_name = localStorage.getItem('userName');
    const session_user_email = localStorage.getItem('userEmail');
    const session_user_cpf = localStorage.getItem('userCPF');

    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">                    
                    <p>Olá, bem-vindo de volta!</p>  
                    <img src={IconUser} alt="icone-usuario"></img>            
                </div>
                <br></br>
                <h1>PERFIL</h1>
                <br></br>
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
                <DefaultButton text="Alterar"/>
                <br></br>
                <br></br>
                <NavLink to='/menu'>
                    <DefaultButton text="Menu"/>
                </NavLink>
                <br></br>
                <br></br>
                <br></br>                
            </section>
        </>
    )
}

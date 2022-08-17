// React
import { NavLink } from "react-router-dom";

// Componentes
import { DefaultButton } from '../../Components/Button';

// CSS
import './style.css';
import IconUser from '../../Images/user.png';

export function PagePerfil() {
    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">                    
                    <p>Olá, bem-vindo de volta!</p>  
                    <img src={IconUser} alt="icone-usuario" className="perfil-icon"></img>            
                </div>
                <br></br>
                <h1>PERFIL</h1>
            </section>
            <br></br>
            <section className="perfil-infos">
                <br></br>
                <h3>INFORMAÇÕES</h3>
                <hr></hr>
                <br></br>

                <div className="perfil-card">
                    <p>Nome:</p>
                    <p>Idade:</p>
                    <p>CPF:</p>
                    <p>E-mail:</p>
                </div>

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

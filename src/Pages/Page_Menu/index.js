// Componentes
//import { DefaultButton } from '../../Components/Button';

// React
import { NavLink } from 'react-router-dom';

// CSS
import './style.css';
import IconCheck from '../../Images/checkbox.png';
import IconCancel from '../../Images/cancel.png';
import IconStats from '../../Images/stats.png';
import IconProfile from '../../Images/profile.png';

const styleTitulo = {
    width: "100%",
    marginTop: "8em",
    textAlign: "center",
}

export function PageMenu() {
    // Recuperando dos dados localstorage
    const session_user_email = localStorage.getItem('userEmail');
    const session_user_cpf = localStorage.getItem('userCPF');

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
                <h1>MENU</h1>
            </section>

            <br></br>
            <br></br>
            <br></br>

            <div style={styleTitulo}> 
                <h3>OPÇÕES</h3>
                <hr></hr>
            </div>

            <nav className="menu-buttons">
                <br></br>
                <div className="menu-caption">
                    <NavLink to='/perfil'>
                        <img src={IconProfile} alt="icone-perfil" className="menu-icons"></img>
                    </NavLink>
                    <p>Meu perfil</p>
                </div>

                <div className="menu-caption">
                    <NavLink to='/renda'>
                        <img src={IconCheck} alt="icone-check" className="menu-icons"></img>
                    </NavLink>
                    <p>Renda</p>
                </div>

                <div className="menu-caption">
                    <img src={IconStats} alt="icone-status" className="menu-icons"></img>
                    <p>Extrato</p>
                </div>

                <div className="menu-caption">
                    <img src={IconCancel} alt="icone-cancelar" className="menu-icons"></img>
                    <p>Despesa</p>
                </div>
                <br></br>
            </nav>
        </>
    )
}




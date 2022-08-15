// Componentes
//import { DefaultButton } from '../../Components/Button';

// CSS
import './style.css';
import IconCheck from '../../Images/checkbox.png';
import IconCancel from '../../Images/cancel.png';
import IconStats from '../../Images/stats.png';

const styleTitulo = {
    width: "100%",
    marginTop: "8em",
    textAlign: "center",
}

export function PageMenu() {
    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">                    
                    <p>Perfil: Mateus Leite pedrosa</p>          
                </div>
                <br></br>
                <h1>MENU</h1>
            </section>

            <br></br>
            <br></br>

            <div style={styleTitulo}> 
                <h3>Opções</h3>
                <hr></hr>
            </div>

            <nav className="menu-buttons">
                <br></br>
                <div className="menu-caption">
                    <img src={IconCheck} alt="icone-check" className="menu-icons"></img>
                    <p>Adicionar</p>
                </div>

                <div className="menu-caption">
                    <img src={IconStats} alt="icone-status" className="menu-icons"></img>
                    <p>Extrato</p>
                </div>

                <div className="menu-caption">
                    <img src={IconCancel} alt="icone-cancelar" className="menu-icons"></img>
                    <p>Deletar</p>
                </div>
                <br></br>
            </nav>
        </>
    )
}




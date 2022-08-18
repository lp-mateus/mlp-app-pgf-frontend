// React
import { NavLink } from 'react-router-dom';

// Components
import { Header } from '../../Components/Header';
import { DefaultButton } from '../../Components/Button';
import { FormCadastro } from '../../Components/Form';

// CSS
import './style.css';
import IluCadastro from '../../Images/ilu-cadastro.png'

export function PageCadastro() {
    return(
        <>
        <Header />
        <section className="cadastro-titulo">
            <img src={IluCadastro} alt="ilustração-pessoa-com-guardachuva" className="cadastro-ilu-style"></img>
            <h3>Bem-vindo!</h3>
            <hr></hr>
            <p>
                Já possui cadastro? Realize seu login aqui
            </p>
            <NavLink to='/login'>
                <DefaultButton text="Login"/>       
            </NavLink>
            <br></br>

            <br></br>
    
            <br></br>
            <h3>Formulário</h3>
            <hr></hr>
            <p>
                Se não...Realize seu cadastro a seguir em nosso formulário!
            </p>
            <FormCadastro />
            <br></br>
            <div><p></p></div>
        </section>        
        </>
    )
}
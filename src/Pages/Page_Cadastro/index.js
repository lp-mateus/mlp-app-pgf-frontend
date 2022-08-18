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
                Não possui cadastro? Então preencha o nosso formulário
            </p>
            <FormCadastro />

            <p>Ou</p>

            <NavLink to='/login'>
                <DefaultButton text="Login"/>       
            </NavLink>
            <p>Já possui uma conta? Então é só realizar seu Login</p>
            <div><p></p></div>
        </section>        
        </>
    )
}



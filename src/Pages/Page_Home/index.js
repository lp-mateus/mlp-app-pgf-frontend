// Componentes
import { Header } from '../../Components/Header';
import { DefaultButton } from '../../Components/Button';

// CSS
import './style.css';

export function PageHome() {
    // Metódos

    return(
        <> 
            <Header />
            <br></br>
            <section className="home-titulo">
                <div>
                    <h1>Plataforma de Gerenciamento Financeiro</h1>
                </div>
                <DefaultButton text="Cadastrar"/>
            </section>
        </>
    )
}
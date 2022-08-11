// Componentes
import { Header } from '../../Components/Header';
import { DefaultButton } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

// CSS
import './style.css';
import FigureSavingPig from '../../Images/ilu-savingmoney.jpg';

export function PageHome() {
    // Metódos

    return(
        <> 
            <Header />

            <section className="home-titulo">
                <br></br>
                <br></br>
                <br></br>
                <div className="home-color">
                    <h1>Plataforma de Gerenciamento Financeiro</h1>
                </div>
                <DefaultButton text="Cadastrar"/>
            </section>

            <br></br>

            <section className="home-subtitulo">
                <h3>Poupança</h3>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis at sem sed faucibus. Fusce fermentum molestie urna, et tincidunt tellus convallis viverra.
                </p>
                <img src={FigureSavingPig} alt="ilustração-poupando" className="ilu-style"></img>
            </section>

            <section className="home-subtitulo">
                <h3>Poupança</h3>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis at sem sed faucibus. Fusce fermentum molestie urna, et tincidunt tellus convallis viverra.
                </p>
                <img src={FigureSavingPig} alt="ilustração-poupando" className="ilu-style"></img>
            </section>

            <section className="home-subtitulo">
                <h3>Poupança</h3>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis at sem sed faucibus. Fusce fermentum molestie urna, et tincidunt tellus convallis viverra.
                </p>
                <img src={FigureSavingPig} alt="ilustração-poupando" className="ilu-style"></img>
            </section>    

            <br></br>  

            <Footer />       
        </>
        
    )
}


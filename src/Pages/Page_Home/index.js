// React
import { NavLink } from "react-router-dom";

// Componentes
import { Header } from '../../Components/Header';
import { DefaultButton } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

// CSS
import './style.css';
import FigureSavingPig from '../../Images/ilu-savingmoney.jpg';

export function PageHome() {

    return(
        <> 
            <Header />

            <section className="home-titulo">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <NavLink to='/cadastro'>
                    <DefaultButton text='ACESSAR'/>
                </NavLink>
            </section>

            <br></br>

            <section className="home-subtitulo">
                <h3>POUPANÇA</h3>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis at sem sed faucibus. Fusce fermentum molestie urna, et tincidunt tellus convallis viverra.
                </p>
                <img src={FigureSavingPig} alt="ilustração-poupando" className="ilu-style"></img>
            </section>

            <section className="home-subtitulo">
                <h3>CONTROLE</h3>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis at sem sed faucibus. Fusce fermentum molestie urna, et tincidunt tellus convallis viverra.
                </p>
                <img src={FigureSavingPig} alt="ilustração-poupando" className="ilu-style"></img>
            </section>

            <section className="home-subtitulo">
                <h3>FACILIDADE</h3>
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

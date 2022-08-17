// Blibiotecas
import { NavLink } from "react-router-dom";

export function Header() {
    // Métodos

    // Style inline CSS in JS
    const styleTitulo = {
        color: "#FF1744",
        fontWeight: "bolder",
        fontSize: "2em",
    }

    return(
        <header>
            <h3 style={styleTitulo}>PGFMLP</h3>
            <nav>
                <ul>
                    <NavLink to="/" className="link-default">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/cadastro" className="link-default">
                        <li>Cadastro</li>
                    </NavLink>
                    <NavLink to="/" className="link-default">
                        <li>Sobre</li>
                    </NavLink>
                    <NavLink to="/" className="link-default">
                        <li>Contato</li>
                    </NavLink>
                </ul>
            </nav>            
        </header>
    )
}
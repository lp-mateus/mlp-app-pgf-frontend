// React
//import { NavLink } from "react-router-dom";

// Services
import { getDataBaseExtrato } from "../../Services/getDataBaseExtrato";

export function PageExtrato() {
    // Métodos
    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">   
                    <p>PGFMLP</p>                             
                </div>
                <br></br>   
                <br></br>   
                <br></br>  
                <h1>EXTRATO</h1>
            </section>
            <br></br>
            <section className="perfil-infos">
                <br></br>
                <h3>INFORMAÇÕES</h3>
                <hr></hr>
                <p>E-mail:</p>
                <br></br>   
                <button onClick={getDataBaseExtrato}>GETRENDA</button>
            </section>
        </>
    )
}




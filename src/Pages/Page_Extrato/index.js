// React
import { useEffect } from "react";

// Services
import { getDataBaseRenda } from '../../Services/getDataBaseRenda.js';
import { getDataBaseDespesa } from "../../Services/getDataBaseDespesa.js";

export function PageExtrato() {

    // Hooks
    useEffect(() => {
        // Services
        getDataBaseRenda();
        getDataBaseDespesa();
    });

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
                <p>Extrato:</p>
                <br></br>   
                
            </section>
        </>
    )
}


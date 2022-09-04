// React
import { useState } from "react";

// Services
import { getDataBaseRenda } from '../../Services/GET/getDataBaseRenda.js';
import { getDataBaseDespesa } from "../../Services/GET/getDataBaseDespesa.js";

const styleCenter = {
    width: "100%",
    textAlign: "center"
}

const styleDivisor = {
    border: "2px solid whitesmoke",
}

const styleRenda = {
    width: "70%",
    margin: "0 auto",
    color: "whitesmoke",
    fontSize: "1.5rem",
    lineHeight: "1rem",
    borderRadius: "33px 33px 33px 33px",
    backgroundColor: "#23D34C"
}

const styleDespesa = {
    width: "70%",
    margin: "0 auto",
    color: "whitesmoke",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    borderRadius: "33px 33px 33px 33px",
    backgroundColor: "#e60000"
}

export function PageExtrato() {
    const [renda, setRenda] = useState(0);
    const [despesa, setDespesa] = useState([0]);

    // services
    const servicesExtrato = () => {
        // Request
        getDataBaseRenda();
        getDataBaseDespesa();

        // Update states
        setRenda(
            localStorage.getItem('userRenda')
        );

        setDespesa(
            JSON.parse(localStorage.getItem('userDespesas'))
        );
    }

    return(
        <>
            <section className="perfil-header">
                <div className="perfil-container">   
                    <p>PGFMLP</p>                             
                </div>
                <br></br>   
                <h1>EXTRATO</h1>
            </section>
            <br></br>
            <section className="perfil-infos">
                <br></br>
                <h3>DESPESAS RECENTES</h3>
                <hr></hr>

                <br></br>

                <section>
                    <div style={styleRenda}>
                        <br></br>
                        <p>RENDA MENSAL</p>
                        <hr style={styleDivisor}></hr>
                        <p>R${renda},00</p>
                        <br></br>
                    </div>
                </section>

                <br></br>

                <section>   
                    {despesa.map((element) => {
                        return(
                            <>
                            <div style={styleDespesa}>
                                <br></br>
                                <p>DISPESA</p>
                                <hr style={styleDivisor}></hr>
                                <p>Descrição: {element.description}</p>
                                <p>Data: {element.data}</p>                                
                                <p>Valor: R${element.valor},00</p>
                                <br></br>
                            </div>
                            <br></br>
                            </>
                        )
                    })}
                </section>

                <br></br>
            </section>
            <br></br>
            <div style={styleCenter}>
                <button onClick={servicesExtrato}>VER DESPESAS</button>
            </div>
            <br></br>
        </>
    )
}

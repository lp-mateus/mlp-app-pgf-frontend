// React
import { useEffect, useState } from "react";

// Services
import { getDataBaseRenda } from '../../Services/getDataBaseRenda.js';
import { getDataBaseDespesa } from "../../Services/getDataBaseDespesa.js";

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

    // Hook useEffect
    useEffect(() => {
        // Assincronismo
        const servicesExtrato = async () => {
            // Request
            await getDataBaseRenda();
            await getDataBaseDespesa();

            // Updates states
            setRenda(
                localStorage.getItem('userRenda')
            );

            setDespesa(
                JSON.parse(localStorage.getItem('userDespesas'))
            );
        }

        // Main
        servicesExtrato();
        
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
        </>
    )
}


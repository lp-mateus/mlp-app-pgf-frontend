// React
import { useEffect } from "react";
import { useState } from "react";

// Services
import { getDataBaseRenda } from '../../Services/getDataBaseRenda.js';
import { getDataBaseDespesa } from "../../Services/getDataBaseDespesa.js";

const styleSelectInput = {
    fontSize: "1.5rem",
    color: "#000444",
    width: "65%",
    backgroundColor: "transparent",
    cursor: "pointer"
}

const styleRenda = {
    width: "100%",
    color: "whitesmoke",
    fontSize: "1.5rem",
    backgroundColor: "#23D34C"
}

const styleDespesa = {
    width: "100%",
    color: "whitesmoke",
    fontSize: "1.5rem",
    backgroundColor: "#e60000"
}

export function PageExtrato() {
    const [select, setSelect] = useState("");
    const filtro = [];

    // Hook useEffect
    useEffect(() => {
        // Services
        getDataBaseRenda();
        getDataBaseDespesa();

    });

    // Localstorage
    const renda = localStorage.getItem('userRenda');
    const despesa = JSON.parse(localStorage.getItem('userDespesas'));

    // Método filtra despesas por mês
    const handleSelect = (event) => {
        // input
        event.preventDefault();

        // verifica dispesas do mês selecionado
        despesa.forEach(element => {
            const aux = element.data.slice(3,5);
            if(select === aux){
                filtro.push(element);
            }
        });

        // verifica filtro
        console.log("FILTRO:", filtro);
    }

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

                <p>Selecione o mês das dispesas:</p>
                <form id="select-periodo" onSubmit={handleSelect}>
                    <select style={styleSelectInput} form='select-periodo' onChange={(event) => {setSelect(event.target.value)}}>
                        <option value='01'>Janeiro</option>
                        <option value='02'>Fevereiro</option>
                        <option value='03'>Março</option>
                        <option value='04'>Abril</option>
                        <option value='05'>Maio</option>
                        <option value='09'>Setembro</option>                    
                    </select>
                </form>

                <br></br>

                <div style={styleRenda}>
                    <p>Valor da sua renda mensal: R${renda},00</p>
                </div>

                <div style={styleDespesa}>
                    <p>Despesas do período 01/{select}/2022:</p>
                  
                    
                </div>

                <br></br>
                <br></br>
                <br></br>
            </section>
        </>
    )
}
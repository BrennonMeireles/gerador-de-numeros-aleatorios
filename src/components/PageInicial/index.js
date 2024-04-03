import React, { useState } from "react";
import "./style.css"

function PageInicial(){
    
    const [numeroAleatorio, setNumeroAleatorio] = useState(10)

    function gerarNum(){
        const novoNum =Math.floor(Math.random() * (100-1) + 1)
        setNumeroAleatorio(novoNum)
    }

    return(
        <div className="container">
            <h1>Número Aleatorio</h1>
            <h2>{numeroAleatorio}</h2>

            <div className="area-botao">
                <label>
                    Click no Botão abaixo para gerar um novo número
                </label>
                <button onClick={gerarNum}>
                    Gerar novo número
                </button>
            </div>
        </div>
    );
}

export default PageInicial
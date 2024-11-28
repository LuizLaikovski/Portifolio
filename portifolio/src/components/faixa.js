import React from 'react';
import './faixa.css';   

function Faixa(props) {
    return (
    <>
        <header className="range">
            <h1>{props.mensagem}</h1>
        </header>
    </>
    );
}

export default Faixa;
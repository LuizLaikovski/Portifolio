import React, { useState } from 'react';
import './Risco.css';

function Risco({largura, altura, margens}) {
    let [size, setSize] = useState({width: 100, height: 100});


    return (
        <>
            <div style={{
                width: `${largura}px`,
                height: `${altura}dvh`,
                backgroundColor: `black`,
                marginLeft : `${margens}px`,
                marginRight : `${margens}px`
            }} className='risco'></div>
        </>
    );
}

export default Risco
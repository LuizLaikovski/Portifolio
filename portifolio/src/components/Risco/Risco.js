import React, { useState } from 'react';

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
            }}></div>
        </>
    );
}

export default Risco
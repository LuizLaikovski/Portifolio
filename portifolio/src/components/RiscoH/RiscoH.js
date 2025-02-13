import './RiscoH.css';
import { useState } from "react";

function RiscoH({largura, grossura, margens}) {
    let [size, setSize] = useState({width: 100, height: 100})

    return(
        <> 
            <div style={{
                width: `${largura}dvw`,
                height: `${grossura}px`,
                backgroundColor: 'black',
                marginTop: `${margens}px`,
                marginBottom: `${margens}px`
            }} className='RiscoH'></div>
        </>
    );
}

export default RiscoH
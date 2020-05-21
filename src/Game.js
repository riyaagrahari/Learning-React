import React from 'react';
import { useState } from "react";

function Button()
{
    const [counter, setCounter] = useState(1);
    const handleClick = () => {setCounter(counter*2)}
    return(
    <button style ={{width:'100px', height:'100px', position:"absolute", left: '350px', top: '300px', backgroundColor: '#008CBA' }} onClick = {handleClick}>
        {counter}
    </button>
    );
}

export default Button
import React from 'react';
import { useState } from "react";

function Button()
{
    const [counter, setCounter] = useState(1);
    return(
    (<button style ={{width:'100px', height:'100px', position:"absolute", left: '350px', top: '300px' }} onClick = {() => setCounter(counter*2)}>{counter}</button>)
    )
}

export default Button
import React from "react";
import { useState } from "react";

// const name = "Mamadu Bilo";
// const element = <h1>Hello {name}</h1>

function App(){
       const [count, setCount] = useState(4);

       function decrementCount(){
        setCount(count - 1);
       }

       return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button>+</button>
        </>
       )
}

export default  App
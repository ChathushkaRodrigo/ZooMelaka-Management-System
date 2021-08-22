import React, {useState} from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0);

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <h1>Function Component</h1>
            <h1>Counter = {number}</h1>
            <button onClick ={e => increment()}>Increment</button> 

        </div>
    )
}
//e => arrow function as an event

export default CounterFunction;

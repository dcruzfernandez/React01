import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function CounterApp({value=10}) {

    const [counter, setCounter] = useState(value);

    const AddCounter=()=>{
        // setCounter(counter+1);
        setCounter((c)=>c+1);
    }

    const SubtractCounter=()=>{
        // setCounter(counter+1);
        setCounter((c)=>c-1);
        
    }

    const ResetCounter=()=>{
        // setCounter(counter+1);
        setCounter(value);
        
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={AddCounter}>
                + 1
            </button>

            <button onClick={SubtractCounter}>
                - 1
            </button>

            <button onClick={ResetCounter}>
                Reset
            </button>
            
        </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number
}

// CounterApp.defaultProps={
//     value:10
// }


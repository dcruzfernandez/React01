import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './Counter.css';



export const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset}=useCounter(100);
    return (
        <>
          <h1>Counter With Hook {state}</h1>  
          <hr/>
          <button 
            className='btn btn-primary'
            onClick={()=>{increment(2)}}
          >
            +1
          </button>
          <button 
            className='btn btn-primary'
            onClick={()=>{decrement(2)}}
          >
            -1
          </button>

          <button 
            className='btn btn-primary'
            onClick={reset}
          >
            reset
          </button>
        </>
    )
}

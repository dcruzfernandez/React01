import React, { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';
import { useCounter } from '../../hooks/useCounter';


export const LayoutEffect = () => {

    const {counter,increment}=useCounter(1);
    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    

    const parrafoRef = useRef();
    //la doble negación de null es falso y el operador && devuelve data[0] solo si el resultado de !!data es true
    const {quote}=!!data && data[0];

    useLayoutEffect(() => {
        console.log(parrafoRef.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            
            
            <blockquote 
                className='blockquote'
                ref={parrafoRef}
            >
                <p className='mb-3'>{quote}</p>
            </blockquote>

                
            
            <button className='btn btn-primary' onClick={increment}>
                Siguiente Nota
            </button>
  
        </div>
    )
}

import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';


export const MultipleCustomHooks = () => {

    const {counter,increment}=useCounter(1);
    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    console.log(data);
    //la doble negación de null es falso y el operador && devuelve data[0] solo si el resultado de !!data es true
    const {author,quote}=!!data && data[0];


    return (
        <div>
            <h1>Breadking Bad</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <figure className='text-end'>
                            <blockquote className='blockquote'>
                                <p className='mb-3'>{quote}</p>
                                <footer className='blockquote-footer'>{author}</footer>
                            </blockquote>
                        </figure>
                    )
            }
            <button className='btn btn-primary' onClick={increment}>
                Siguiente Nota
            </button>
  
        </div>
    )
}

import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const AddCategory = ({setcategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChangeValue=(e)=>{
        setInputValue(e.target.value);
    }

    const handledSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim().length){
            setcategories((categorias)=>[...categorias,inputValue]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={handledSubmit}>
            <input 
                type='text' 
                placeholder='Categoría'
                value={inputValue}
                onChange={handleChangeValue}

            />  
        </form>
    )
}

AddCategory.propTypes={
    setcategories:PropTypes.func.isRequired
}
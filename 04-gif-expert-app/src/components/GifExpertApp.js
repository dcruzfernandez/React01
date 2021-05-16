import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const arrCategories=['Hola'];

    const [categories, setCategories] = useState(arrCategories);

    // const handleAdd=()=>{
    //   //setCategories((anterior)=>[...anterior,'Romance']);
    //   setCategories([...categories,'Romance']);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setcategories={setCategories}/>
          <hr/>  
          
            {
              categories.map((category)=>(
                  <GifGrid 
                    key={category}
                    category={category}
                  />
              ))
            }
        </>
    )
}


import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const arrCategories=['Accion'];

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
          
          <ol>
            {
              categories.map((category,index)=>(
                  <GifGrid 
                    key={index}
                    category={category}
                  />
              ))
            }
          </ol>
        </>
    )
}


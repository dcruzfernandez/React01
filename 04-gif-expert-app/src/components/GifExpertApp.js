import React, { useEffect, useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const arrCategories=['Hola'];

    const [categories, setCategories] = useState(arrCategories);

    // const handleAdd=()=>{
    //   //setCategories((anterior)=>[...anterior,'Romance']);
    //   setCategories([...categories,'Romance']);
    // }


    const [listaAlbums, setListaAlbums] = useState([]);

    const getData=(url)=>{
        return fetch(url)
                    .then((response)=>response.json())
                    .then((responseJson)=>{
                        return responseJson;
                    })
                    .catch((error)=>{console.error(error)});
    };
    const getAlbums=async()=>{
        const url='https://jsonplaceholder.typicode.com/albums'
        //const resp= await fetch(url);
        //const data= await resp.json();
        const data= await getData(url);
        console.log('albums',data);
        const urlPhotos='https://jsonplaceholder.typicode.com/photos'
        const respPhotos= await fetch(urlPhotos);
        const dataPhotos= await respPhotos.json();

        const albums=data.map((item)=>{
            return {
                id:item.id,
                title:item.title,
                thumbnail:dataPhotos.find((obj)=>obj.albumId===item.id),
            }
        })

        return albums; 
    }

    useEffect(()=>{
        getAlbums()
            .then(albums=>{
                setListaAlbums(albums); 
                
            });
            const url='https://jsonplaceholder.typicode.com/albums';
            let datos;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log('album',data);
                    datos=[...data];
                });
                //console.log(datos)
    },[]);


    console.log('usestate',listaAlbums);
    return (
        <>
          <h2>Ejemplo</h2>
          {/* <AddCategory setcategories={setCategories}/>
          <hr/>  
          
            {
              categories.map((category)=>(
                  <GifGrid 
                    key={category}
                    category={category}
                  />
              ))
            } */}
        </>
    )
}


// const apiKey='6UoxCbcilaEHahV39HLn9FJ9nSdN0brz';

// const peticion=fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then((resp)=>resp.json())
//     .then (({data})=>{
//         const {url}=data.images.original;
//         const img=document.createElement('img');
//         img.src=url;
//         document.body.append(img);
//     })
//     .catch(console.warn);



// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {

        const apiKey = '6UoxCbcilaEHahV39HLn9FJ9nSdN0brz';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error)
    }
}

 getImagen();



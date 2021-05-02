
import getHeroeById from './funciones'
// const promesa=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         const heroe=getHeroeById(255);
//         heroe?resolve(heroe):reject('No se encontró el heroe');
//     }, 2000);
// });
// promesa.then((obj)=>{
//     console.log(obj);
// }).catch((e)=>{
//     console.warn(e);
// });

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe=getHeroeById(id);
            heroe?resolve(heroe):reject('No se encontró el heroe');
        }, 2000);
    });
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.warn);
    // .catch((e)=>console.warn(e));
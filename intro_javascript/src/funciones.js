import heroes from './data/heroes';


const getHeroeById=(id)=>{
    return heroes.find((obj)=>obj.id===id);
}




const getHeroeByOwner=(owner)=>{
    return heroes.filter((obj)=>obj.owner===owner);
}

export {
    getHeroeById as default,
    getHeroeByOwner
}

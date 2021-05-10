import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas archivo 08-imp-exp', () => {
    test('prueba de getHeroeById', () => {
        

        const id=1;

        const heroe=getHeroeById(id);

        const heroeData=heroes.find(h=>h.id===id);

        expect(heroe).toEqual(heroeData);


    });
    test('prueba de getHeroeById undefined', () => {
        

        const id=10;

        const heroe=getHeroeById(id);

        expect(heroe).toBe(undefined);


    });
    test('Prueba de getHeroesByOwner', () => {

        const autor='DC';

        const heroesAutor=getHeroesByOwner(autor);

        const heroesAutorData=heroes.filter( (hs) => hs.owner === autor );

        expect(heroesAutor).toEqual(heroesAutorData);
        
    });

    test('Prueba de getHeroesByOwner para verificar cantidad de elementos', () => {

        const autor='Marvel';

        const heroesAutor=getHeroesByOwner(autor);

        expect(heroesAutor.length).toBe(2);
        
    });
    
    
})

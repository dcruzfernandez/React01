import {getHeroeByIdAsync} from '../../base/09-promesas'
import heroes from '../../data/heroes';
describe('Pruebas archivo 09-promesas', () => {
    test('Probar promesa getHeroeByIdAsync', (done) => {
        
        const id=1;
        getHeroeByIdAsync(id)
            .then(heroe=>{
                console.log(heroe)
                expect(heroe).toEqual(heroes[0]);
                done();
            })
    
    });

    test('Probar promesa getHeroeByIdAsync cuando el id o existe', (done) => {
        
        const id=10;
        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    
    });
    
})

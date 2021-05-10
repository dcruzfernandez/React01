import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';
describe('Pruebas en 02-template-string', () => {
    test('prueba en el método getSaludo ', () => {
        //1.inicialización
        const nombre='ana';

        //2.estimulo
        const saludo=getSaludo(nombre);

        //3. expect, observar comportamiento
        expect(saludo).toBe('Hola '+nombre);

    });

    test('función sin argumento ', () => {
        //2.estimulo
        const saludo=getSaludo();

        //3. expect, observar comportamiento
        expect(saludo).toBe('Hola maria');
    })
    
    
})

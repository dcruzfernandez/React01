import { getImagen } from "../../base/11-async-await";

describe('Pruebas archivo 11-async-await',  () => {
    test('Promesa con await debe retornar url', async() => {
        const urlTest= await getImagen();

        expect(typeof urlTest).toBe('string')
    });
    
});

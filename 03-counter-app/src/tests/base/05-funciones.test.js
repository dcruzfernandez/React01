import { getUser ,getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas de funciones', () => {
    test('Debe retornar un objeto', () => {
        //inicialización
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        //estimulo
        const user=getUser();

        //expect
        expect(user).toEqual(userTest);

    });
    
    test('Usuario activo', () => {
        //inicializar
        const usuarioActivo='ana';
        const userActTest={
            uid: 'ABC567',
            username: usuarioActivo
        }

        //estimulo
        const user=getUsuarioActivo(usuarioActivo);

        //expect
        expect(user).toEqual(userActTest);
    })
    
})

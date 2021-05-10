//import { render } from "@testing-library/react";
import { PrimeraApp } from "../PrimeraApp";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'

describe('Pruebas de componente PrimeraApp', () => {
    // test('Prueba 1 debe mostrar el mensaje Hola Mundo', () => {
    //     const saludo='Hola Mundo';
        
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>);
    //     console.log(getByText);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe mostrar PrimeraApp correctamente', () => {
       const wrapper=shallow(<PrimeraApp saludo='Hola'/>) 

       expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar PrimeraApp con subtitulo', () => {

        const saludo='hola';

        const subsaludo='adios';
        const wrapper=shallow(<PrimeraApp saludo={saludo} subtitulo={subsaludo}/>); 

        const textoParrafo=wrapper.find('p').text();
        
        console.log(textoParrafo);

        expect(textoParrafo).toBe(subsaludo);
        
     });

});


import  CounterApp  from "../CounterApp";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'

describe('Pruebas de componente CounterApp', () => {
   let wrapper =shallow(<CounterApp/>); 
   beforeEach(()=>{
      wrapper=shallow(<CounterApp/>) ;
    });

    test('Debe mostrar CounterApp correctamente', () => {

       expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar CounterApp con valor cont', () => {

        const contador=100;

        
        const wrapper=shallow(<CounterApp value={100}/>); 

        const valor=parseInt(wrapper.find('h2').text());
        
        //console.log(valor);

        expect(valor).toBe(contador);
        
     });

     test('Probar Botón de Incremento', () => {

        
        wrapper.find('button').at(0).simulate('click');
        
        const counterText=wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('11');

     });

   test('Probar Botón de decremento', () => {

      wrapper.find('button').at(1).simulate('click');
      
      const counterText=wrapper.find('h2').text().trim();
      console.log(counterText);
      expect(counterText).toBe('9');

   });

   test('Probar Botón de reset', () => {

      wrapper.find('button').at(1).simulate('click');
      wrapper.find('button').at(2).simulate('click');
      
      const counterText=wrapper.find('h2').text().trim();
      console.log(counterText);
      expect(counterText).toBe('10');

   });
     

});

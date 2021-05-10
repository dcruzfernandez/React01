import ReactDOM from 'react-dom'
//import { PrimeraApp } from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

// ReactDOM.render(
//     <PrimeraApp saludo='Hola Mundo'/>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <CounterApp value={10}/>,
    document.getElementById('root')
);

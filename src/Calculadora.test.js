import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './Calculadora';
 
describe('Teste calculadora', () => {
    
    it('Deve rederizar o componente calculadora', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculadora />, div); // rederiza do componente
        ReactDOM.unmountComponentAtNode(div); // ecerra a rederização
    });
    
});



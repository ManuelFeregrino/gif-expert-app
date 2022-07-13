import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } }); // Simulamos que el usuario escribe un nombre en la busqueda

        expect( input.value ).toBe('Saitama');

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn(); // Funsión ficticia

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form'); // Se agrega un aria-label en el form para que pueda ser accesible

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled(); // Evaluamos que la funsion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);  // Evaluamos que la funsion haya sido llamada 1 vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );  // Evaluamos que la funsion haya sido llamada con el valor del input = Saitama

    });

    test('no debe de llamar el onNewCategory si el input está vació', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled(); // Evaluamos que no haya sido llamada la funsión

    });


});
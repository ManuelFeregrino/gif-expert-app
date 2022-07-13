import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../src/components';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('should ', () => {

        const inputValue    = 'Saitama';
        const onNewCategory = jest.fn();
        
        render( <GifExpertApp /> );
        // render( <AddCategory onNewCategory={ onNewCategory } /> );
        // screen.debug();

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        screen.debug();
        // expect( onNewCategory ).toHaveBeenCalled(); // Evaluamos que la funsion haya sido llamada

    });


});
import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBeGreaterThan( 0 ); // Que sea mayor a 0
        expect( gifs[0] ).toEqual({ // Evaluamos que existan las propiedades indicadas
            id: expect.any( String ), // Evaluamos que se resiva un string
            title: expect.any( String ),
            url: expect.any( String ),
        });
        
    });

});
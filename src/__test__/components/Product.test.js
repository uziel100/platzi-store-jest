import React from 'react'
import { mount, shallow } from 'enzyme'
import Product from '../../components/Product'
import ProductMock from '../../__mocks__/ProductMock'
import ProviderMock from '../../__mocks__/ProviderMock'


describe('<Product />', () => {
    

    test('should show correcte componetn', () => {
        const root = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        )

        expect( root.length ).toEqual(1);
    })


    test('Comprobar el boton de comprar', () => {
        const handleAddToCart = jest.fn();

        const root = mount(
            <ProviderMock>
                <Product 
                    product={ProductMock}
                    handleAddToCart={handleAddToCart}
                />
            </ProviderMock>
        )

        root.find('button').simulate('click');
        expect( handleAddToCart ).toHaveBeenCalledTimes(1)
        
    })

  
    
})

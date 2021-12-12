import reducers from '../../reducers'
import ProductMock from '../../__mocks__/ProductMock'


describe('Reducers', () => {

    const initialState = {
        cart: [],
        products: []
    };
    
    test('Retornar initialState', () => {
        
        expect( reducers({}, {}) ).toEqual({})
    })

    test('Add to cart', () => {
        
        const action = {
            type: 'ADD_TO_CART',
            payload: ProductMock
        }

        const expected = {
            ...initialState,
            cart: [ProductMock]
        }

        expect( reducers(initialState, action ) ).toEqual( expected )
    })
    
    
})

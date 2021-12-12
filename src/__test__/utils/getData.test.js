import { getData } from "../../utils/getData"


describe('fetch API', () => {
    beforeEach( () => {
        fetch.resetMocks();
    })
    test('llamar a api y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

        getData('https://www.google.com')
            .then( response => {
                expect( response.data ).toEqual('12345')
            })

        expect( fetch.mock[0][0] ).toEqual('https://www.google.com')
    })
    
})

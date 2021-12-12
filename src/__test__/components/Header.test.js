

import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import Header from '../../components/Header'

import {  create } from 'react-test-renderer'

describe('<Header />', () => {
    
    test('should mount component', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect( header.length ).toEqual(1)
    })

    test('should show title ', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        expect( header.find('.Header-title').text() ).toEqual("Platzi Store")
    })
    
})


describe('snapshot <Header />', () => {
    
    test('ui correctamente', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );  

        expect( header.toJSON() ).toMatchSnapshot();
    })
    
})

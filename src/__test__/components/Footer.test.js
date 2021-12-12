import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import {  create } from 'react-test-renderer'

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('render un texto', () => {
    expect( footer.find('.Footer-title').text()).toEqual('Platzi Store')  
  })
  
});


describe('footer snapshot', () => {
  test('comprobar la ui del componente', () => {
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow( <App /> );
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('Render Countries Component', () => {
    expect( wrapper.find('Countries').length ).toBe(1);
  });
});

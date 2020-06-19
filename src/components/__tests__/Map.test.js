import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow( <Map /> );
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
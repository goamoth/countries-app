import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Search', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow( <Search /> );
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
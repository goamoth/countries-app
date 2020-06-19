import React from 'react';
import { shallow } from 'enzyme';
import Countries from '../Countries';

describe('Countries', () => {
   let wrapper;

   beforeEach( () => {
      wrapper = shallow( <Countries /> );
   });

   it('Renders without crashing', () => {
      expect(wrapper).toBeDefined();
   });

   it('Renders Nav Component', () => {
      expect( wrapper.find('Nav').length ).toBe(1);
   });

   it('Renders Header Component', () => {
     expect( wrapper.find('Header').length ).toBe(1);
   });

   it('Renders Map Component', () => {
      expect( wrapper.find('Map').length ).toBe(1);
   });

   it('Renders Details Component', () => {
      expect( wrapper.find('Details').length ).toBe(1);
   });

   it('Renders Footer Component', () => {
      expect( wrapper.find('Footer').length ).toBe(1);
   });
});
import React from 'react';
import { shallow } from 'enzyme';
import TwoRowPresentation from './TwoRowPresentation';

it('Debe comparar dos snapshops del componente TwoRowPresentation', () => {
  const wrapper = shallow(<TwoRowPresentation />);
  expect(wrapper).toMatchSnapshot();
});

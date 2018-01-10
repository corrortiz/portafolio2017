import React from 'react';
import { shallow } from 'enzyme';
import TwoRowPresentationG from './TwoRowPresentationG';

it('Debe comparar dos snapshops del componente TwoRowPresentation', () => {
  const wrapper = shallow(<TwoRowPresentationG />);
  expect(wrapper).toMatchSnapshot();
});

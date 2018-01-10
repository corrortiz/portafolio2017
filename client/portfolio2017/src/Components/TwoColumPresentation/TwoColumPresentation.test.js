import React from 'react';
import { shallow } from 'enzyme';
import TwoColumPresentation from './TwoColumPresentation';

it('Deberia de comparar una snapshop de TwoColumPresentation', () => {
  const wrapper = shallow(<TwoColumPresentation />);
  expect(wrapper).toMatchSnapshot();
});

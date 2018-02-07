import React from 'react';
import { shallow } from 'enzyme';
import { PresentationRightToLeft } from '../../../Components/PresentationRightToLeft/PresentationRightToLeft';

it('Deberia de comparar una snapshop de PresentationRightToLeft', () => {
  const wrapper = shallow(<PresentationRightToLeft />);
  expect(wrapper).toMatchSnapshot();
});

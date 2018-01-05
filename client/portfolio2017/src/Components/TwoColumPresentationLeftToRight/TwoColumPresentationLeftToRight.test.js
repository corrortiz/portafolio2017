import React from 'react';
import { shallow } from 'enzyme';
import TwoColumPresentationLeftToRight from './TwoColumPresentationLeftToRight';

it('Deberia de comparar una snapshop de TwoColumPresentationLeftToRight', () => {
  const wrapper = shallow(<TwoColumPresentationLeftToRight />);
  expect(wrapper).toMatchSnapshot();
});

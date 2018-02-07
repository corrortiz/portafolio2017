import React from 'react';
import { shallow } from 'enzyme';
import { PresentationBottomToTop } from '../../../Components/PresentationBottomToTop/PresentationBottomToTop';

it('Debe comparar dos snapshops del componente PresentationBottomToTop', () => {
  const wrapper = shallow(<PresentationBottomToTop />);
  expect(wrapper).toMatchSnapshot();
});

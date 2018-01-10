import React from 'react';
import { shallow } from 'enzyme';
import ImageContainer from './ImageContainer';

it('Should revise a snapchopt of ImageContainer', () => {
  const wrapper = shallow(<ImageContainer />);
  expect(wrapper).toMatchSnapshot();
});

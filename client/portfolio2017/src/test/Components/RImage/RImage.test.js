// @flow
import React from 'react';
import { shallow } from 'enzyme';
import RImage from '../../../Components/RImage/RImage';

it('renders without crashing', () => {
  const wrapper = shallow(<RImage />);
  expect(wrapper).toMatchSnapshot();
});

// @flow
import React from 'react';
import { shallow } from 'enzyme';
import Routs from './Routs';

it('should compare a snapshot of Routs', () => {
  const wrapper = shallow(<Routs />);
  expect(wrapper).toMatchSnapshot();
});

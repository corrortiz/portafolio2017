// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TabMenu from './TabMenu';

it('should compare a snapshot of TabMenu', () => {
  const wrapper = shallow(<TabMenu />);
  expect(wrapper).toMatchSnapshot();
});

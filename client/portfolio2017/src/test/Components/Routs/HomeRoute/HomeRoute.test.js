// @flow
import React from 'react';
import { shallow } from 'enzyme';
import HomeRoute from '../../../../Components/Routs/HomeRoute/HomeRoute';

it('should compare a snapshot of HomeRoute', () => {
  const wrapper = shallow(<HomeRoute />);
  expect(wrapper).toMatchSnapshot();
});

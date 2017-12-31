import React from 'react';
import { shallow } from 'enzyme';
import AppSnackBar from './AppSnackBar';

it('should compare a snapshot of AppSnackBar', () => {
  const wrapper = shallow(<AppSnackBar />);
  expect(wrapper).toMatchSnapshot();
});

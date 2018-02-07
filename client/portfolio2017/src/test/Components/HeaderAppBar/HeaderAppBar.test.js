// @flow
import React from 'react';
import { shallow } from 'enzyme';
import HeaderAppBar from '../../../Components/HeaderAppBar/HeaderAppBar';

it('should compare a snapshot of HeaderAppBar', () => {
  const wrapper = shallow(<HeaderAppBar />);
  expect(wrapper).toMatchSnapshot();
});

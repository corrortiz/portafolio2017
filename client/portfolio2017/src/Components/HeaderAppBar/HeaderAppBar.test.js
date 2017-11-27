// @flow
import React from 'react';
import { shallow } from 'enzyme';
import HeaderAppBar from './HeaderAppBar';

it('shold compara a snapshot of HeaderAppBar', () => {
  const wrapper = shallow(<HeaderAppBar />);
  expect(wrapper).toMatchSnapshot();
});

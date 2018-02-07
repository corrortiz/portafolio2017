// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ServicesRoute from '../../../../Components/Routs/ServicesRoute/ServicesRoute';

it('should compare a snapshot of ServicesRoute', () => {
  const wrapper = shallow(<ServicesRoute />);
  expect(wrapper).toMatchSnapshot();
});

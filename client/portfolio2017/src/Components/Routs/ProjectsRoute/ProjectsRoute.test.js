// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ProjectsRoute from './ProjectsRoute';

it('should compare a snapshot of ProjectsRoute', () => {
  const wrapper = shallow(<ProjectsRoute />);
  expect(wrapper).toMatchSnapshot();
});

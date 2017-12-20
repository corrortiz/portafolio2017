// @flow
import React from 'react';
import { shallow } from 'enzyme';
import FooterApp from './FooterApp';

it('shold compara a snapshot of FooterApp', () => {
  const wrapper = shallow(<FooterApp />);
  expect(wrapper).toMatchSnapshot();
});

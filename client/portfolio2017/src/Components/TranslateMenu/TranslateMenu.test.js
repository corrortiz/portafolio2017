// @flow
import React from 'react';
import { shallow } from 'enzyme';
import TranslateMenu from './TranslateMenu';

it('shold compara a snapshot of TranslateMenu', () => {
  const wrapper = shallow(<TranslateMenu />);
  expect(wrapper).toMatchSnapshot();
});

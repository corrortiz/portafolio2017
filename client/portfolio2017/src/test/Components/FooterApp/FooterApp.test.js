// @flow
import React from 'react';
import { shallow } from 'enzyme';
import FooterApp from '../../../Components/FooterApp/FooterApp';

describe('FooterApp Component', () => {
  it('shold compara a snapshot of FooterApp', () => {
    const wrapper = shallow(<FooterApp />);
    expect(wrapper).toMatchSnapshot();
  });
});

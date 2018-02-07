import React from 'react';
import { shallow } from 'enzyme';
import HeaderAppBar from '../../../Components/HeaderAppBar/HeaderAppBar';

describe('HeadarAppBar', () => {
  it('should compare a snapshot of HeaderAppBar', () => {
    const wrapper = shallow(<HeaderAppBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

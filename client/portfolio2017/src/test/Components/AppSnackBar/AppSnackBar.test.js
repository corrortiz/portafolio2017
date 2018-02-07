import React from 'react';
import { shallow } from 'enzyme';
import { AppSnackBar } from '../../../Components/AppSnackBar/AppSnackBar';

describe.only('AppSnackBar Component', () => {
  it('should compare a snapshot of AppSnackBar', () => {
    const wrapper = shallow(<AppSnackBar />);
    expect(wrapper).toMatchSnapshot();
  });
});

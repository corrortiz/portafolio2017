import React from 'react';
import { shallow } from 'enzyme';
import { AppSnackBar } from '../../../Components/AppSnackBar/AppSnackBar';

const globals = {
  openSnackBar: true,
  messageSnackBar: 'AO HyS Rules',
  lenguaje: 'es'
};

describe('AppSnackBar Component', () => {
  it('should compare a snapshot of AppSnackBar', () => {
    const wrapper = shallow(<AppSnackBar globals={globals} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a div tag', () => {
    const wrapper = shallow(<AppSnackBar globals={globals} />);
    expect(wrapper.find('Snackbar')).to.have.length(1);
  });
});

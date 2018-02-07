import React from 'react';
import { shallow } from 'enzyme';
import { AppSnackBar } from '../../../Components/AppSnackBar/AppSnackBar';

const globals = {
  openSnackBar: true,
  messageSnackBar: 'AO HyS Rules',
  lenguaje: 'es'
};

describe('AppSnackBar Component', () => {
  it('renders without crashing', () => {
    shallow(<AppSnackBar globals={globals} />);
  });

  it('should compare a snapshot of AppSnackBar', () => {
    const wrapper = shallow(<AppSnackBar globals={globals} />);
    expect(wrapper).toMatchSnapshot();
  });
});

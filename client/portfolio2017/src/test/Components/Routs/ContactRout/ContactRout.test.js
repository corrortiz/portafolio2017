// @flow
import React from 'react';
import { shallow } from 'enzyme';
import ContactRout from '../../../../Components/Routs/ContactRout/ContactRout';

it('should compare a snapshot of ContactRout', () => {
  const wrapper = shallow(<ContactRout />);
  expect(wrapper).toMatchSnapshot();
});

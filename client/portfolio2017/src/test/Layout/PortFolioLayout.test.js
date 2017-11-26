import React from 'react';
import { shallow } from 'enzyme';
import PortfolioLayout from '../../Layout/PortFolioLayout';

it('renders without crashing', () => {
  const wrapper = shallow(<PortfolioLayout />);
  expect(wrapper).toMatchSnapshot();
});

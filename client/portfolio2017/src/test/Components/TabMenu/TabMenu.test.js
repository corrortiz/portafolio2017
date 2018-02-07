import React from 'react';
import { shallow } from 'enzyme';
import { TabMenu } from '../../../Components/TabMenu/TabMenu';

describe('TabMenu Component', () => {
  it('should compare a snapshot of TabMenu', () => {
    const wrapper = shallow(<TabMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PresentationBottomToTop } from '../../../Components/PresentationBottomToTop/PresentationBottomToTop';

describe('PresentationBottomToTop Component', () => {
  it('renders without crashing', () => {
    shallow(<PresentationBottomToTop />);
  });

  it('should compare a snapshops of PresentationBottomToTop', () => {
    const wrapper = shallow(<PresentationBottomToTop />);
    expect(wrapper).toMatchSnapshot();
  });
});

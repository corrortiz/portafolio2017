import React from 'react';
import { shallow } from 'enzyme';
import { PresentationRightToLeft } from '../../../Components/PresentationRightToLeft/PresentationRightToLeft';

describe('PresentationRightToLeft Component', () => {
  it('should compare a snapshop of PresentationRightToLeft', () => {
    const wrapper = shallow(<PresentationRightToLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { PresentationLeftToRight } from '../../../Components/PresentationLeftToRight/PresentationLeftToRight';

describe('PresentationLeftToRight Component', () => {
  it('Should compare a snapshop of the component', () => {
    const wrapper = shallow(<PresentationLeftToRight />);
    expect(wrapper).toMatchSnapshot();
  });
});

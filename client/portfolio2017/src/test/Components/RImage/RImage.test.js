import React from 'react';
import { shallow } from 'enzyme';
import RImage from '../../../Components/RImage/RImage';

describe('RImage Component', () => {
  it('should compara a snapshot of RImage', () => {
    const wrapper = shallow(<RImage />);
    expect(wrapper).toMatchSnapshot();
  });
});

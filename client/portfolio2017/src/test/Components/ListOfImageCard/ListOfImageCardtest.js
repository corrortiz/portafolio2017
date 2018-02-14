import React from 'react';
import { shallow } from 'enzyme';
import ListOfImageCard from '../../../Components/ListOfImageCard/ListOfImageCard';

describe('ListOfImageCard Component', () => {
  it('should compara a snapshot of ListOfImageCard', () => {
    const wrapper = shallow(<ListOfImageCard />);
    expect(wrapper).toMatchSnapshot();
  });
});

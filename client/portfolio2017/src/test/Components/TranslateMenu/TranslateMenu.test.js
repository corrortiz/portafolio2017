import React from 'react';
import { shallow } from 'enzyme';
import { TranslateMenu } from '../../../Components/TranslateMenu/TranslateMenu';

describe('TranslateMenu Component', () => {
  it('should compare a snapshot of TranslateMenu', () => {
    const wrapper = shallow(<TranslateMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});

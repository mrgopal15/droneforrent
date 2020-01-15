import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('works ok', () => {
    const component = shallow(<Header
      handleLogOut={() => {}}
      user={() => {}}
    />);
    expect(component).toMatchSnapshot();
  });
});
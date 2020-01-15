import React from 'react';
import { shallow } from 'enzyme';

import PopUp from './PopUp';

describe('PopUp', () => {
  it('works ok', () => {
    const component = shallow(<PopUp />);

    expect(component).toMatchSnapshot();
  });
});
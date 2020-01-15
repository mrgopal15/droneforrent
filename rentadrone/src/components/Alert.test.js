import React from 'react';
import { shallow } from 'enzyme';

import Alert from './Alert';

describe('Alert', () => {
  it('works ok', () => {
    const component = shallow(<Alert />);

    expect(component).toMatchSnapshot();
  });
});
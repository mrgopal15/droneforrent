import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('works ok', () => {
    const component = shallow(<LoginForm
      alert={() => {}}
      handleChange={() => {}}
      handleClick={() => {}}
    />);
    expect(component).toMatchSnapshot();
  });
});
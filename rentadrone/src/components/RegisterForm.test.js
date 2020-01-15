import React from 'react';
import { shallow } from 'enzyme';

import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('works ok', () => {
    const component = shallow(<RegisterForm
      alert={() => {}}
      handleClick={() => {}}
      state={{
        firstName: null,
        lastName: null, 
        email: null,
        phone: null, 
        firstNameErr: null, 
        lastNameErr: null, 
        emailErr: null, 
        phoneErr: null
      }}  
    />);
    expect(component).toMatchSnapshot();
  });
});
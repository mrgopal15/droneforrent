import React from 'react';
import { shallow } from 'enzyme';

import RentModal from './RentModal';

describe('RentModal', () => {
  it('works ok', () => {
    const component = shallow(<RentModal
      endFlying={() => {}}
      drone={() => {}}
      values={{
        modalOpen: true,
        alert: {}
      }}  
      
    />);

    expect(component).toMatchSnapshot();
  });
});
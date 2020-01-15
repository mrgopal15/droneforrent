import React from 'react';
import { shallow } from 'enzyme';

import Station from './Station';

describe('Station', () => {
  it('works ok', () => {
    const component = shallow(<Station
      droneList={() => {}}
      values={{
        title: 'test',
        id: '1'
      }}
    />);
    expect(component).toMatchSnapshot();
  });
});
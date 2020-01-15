import { createStore } from 'redux';

import index from './index';

import { QUAD } from '../config';

describe('rootReducer', () => {
  it('has necessary reducers injected', () => {
    const store = createStore(index);

    expect(
      store.getState().alert, 
    ).toEqual({});

    expect(
      store.getState().user,
    ).toEqual({});

    expect(
      store.getState().registrations,
    ).toEqual([]);
  });
});
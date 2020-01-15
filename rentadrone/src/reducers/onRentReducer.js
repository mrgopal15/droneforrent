import { SET_RENT, CLEAR_RENT, FLY_DR } from '../config';

let initialState = {}; 

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RENT:
      return action.data;
    case FLY_DR:
      return {
        ...state,
        ...action.data,
      };
    case CLEAR_RENT:
      return {};
    default:
      return state;
  }
}
import { ADD_USER, UPDATE_REG } from '../config';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      action.data.banned = false;
      return [
        ...state,
        action.data,
      ];
    case UPDATE_REG:
      return state.map(v => {
        if (v.email === action.data.email) {
          v.banned = true;
        }
        return v;
      });
    default:
      return state;
  }
}
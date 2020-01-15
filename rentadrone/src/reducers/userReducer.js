import { SET_USER, CLEAR_USER, BAN_USER } from '../config';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case CLEAR_USER:
      return {};
    case BAN_USER:
      return {
        ...state,
        banned: true
      };
    default:
      return state;
  }
}
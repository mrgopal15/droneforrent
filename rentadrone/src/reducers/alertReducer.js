import { SET_ALERT, CLEAR_ALERT } from '../config';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        type: action.data.type,
        msg: action.data.msg
      };
    case CLEAR_ALERT:
      return {};
    default:
      return state
  }
}
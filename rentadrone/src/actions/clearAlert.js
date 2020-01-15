import { CLEAR_ALERT } from '../config';

export default () => async dispatch => {
  dispatch({ type: CLEAR_ALERT });
}
import { CLEAR_USER } from '../config';

export default () => async dispatch => {
  dispatch({ 
    type: CLEAR_USER 
  });
}
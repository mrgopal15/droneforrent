import { SET_ALERT, CLEAR_ALERT, ADD_USER } from '../config';

export default (value, pervReg) => async dispatch => {
  dispatch({ type: CLEAR_ALERT });

  /* Check if User exists */
  let checkUser = pervReg.filter(v => v.email === value.email).length;
  if (checkUser > 0) {
    dispatch({ 
      type: SET_ALERT,
      data: { type: 'danger', msg: 'User already exists..!! Proceed to Login.' }
    });
    return false;
  }

  dispatch({ 
      type: ADD_USER,
      data: value
  });
  
  dispatch({ 
    type: SET_ALERT,
    data: { type: 'success', msg: 'User Successfully registered. Login Now.' }
  });
}
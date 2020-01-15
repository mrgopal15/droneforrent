import { CLEAR_RENT, RETURN_ALPHA_DR, RETURN_BETA_DR, RETURN_GAMMA_DR } from '../config';

export default (drone) => async dispatch => {
  dispatch({ type: CLEAR_RENT });

  switch(drone.station) {
    case 'alpha':
      dispatch({ 
        type: RETURN_ALPHA_DR,
        data: drone
      });
      break;
    case 'beta':
      dispatch({ 
        type: RETURN_BETA_DR,
        data: drone
      });
      break;
    default:
      dispatch({ 
        type: RETURN_GAMMA_DR,
        data: drone
      });
  }
}
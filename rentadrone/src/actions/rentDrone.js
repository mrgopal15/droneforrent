import { SET_RENT, RENT_ALPHA_DR, RENT_BETA_DR, RENT_GAMMA_DR } from '../config';

export default drone => async dispatch => {
  dispatch({ 
    type: SET_RENT,
    data: drone
  });

  switch(drone.station) {
    case 'alpha':
      dispatch({ 
        type: RENT_ALPHA_DR,
        data: drone
      });
      break;
    case 'beta':
      dispatch({ 
        type: RENT_BETA_DR,
        data: drone
      });
      break;
    default:
      dispatch({ 
        type: RENT_GAMMA_DR,
        data: drone
      });
  }
}
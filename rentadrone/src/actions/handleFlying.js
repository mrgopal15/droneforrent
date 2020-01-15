import { FLY_DR, BAN_USER, UPDATE_REG, SET_ALERT } from '../config';

export default (drone, user) => async dispatch => {
  /* Recalculate the charge and FlightTime */
  drone.charge = drone.charge === 0 ? 0 : drone.charge - 1;
  drone.availableFlightTime = drone.charge === 0 ? 0 : Math.ceil((drone.maxFlightTime * drone.charge) / 100);

  if (drone.charge === 0) {
    dispatch({ 
      type: BAN_USER
    });

    dispatch({ 
      type: UPDATE_REG,
      data: user
    });

    dispatch({ 
      type: SET_ALERT,
      data: { type: 'danger', msg: 'You have CRASHED the Drone. You will no longer be able to rent a drone..!' }
    });
  }
  
  dispatch({ 
    type: FLY_DR,
    data: drone
  });
}
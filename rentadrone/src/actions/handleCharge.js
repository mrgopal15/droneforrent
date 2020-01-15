import { CHARGE_ALPHA_DR, CHARGE_BETA_DR, CHARGE_GAMMA_DR } from '../config';

export default (alpha, beta, gamma) => async dispatch => {
  let selectedDrone;
  
  alpha = alpha.filter(v => v.charge !== 100);
  if (alpha.length > 0) {
    selectedDrone = alpha[Math.floor(Math.random() * alpha.length)]; // Pick a Random Drone from ALPHA
    dispatch({ 
      type: CHARGE_ALPHA_DR,
      data: selectedDrone
    });
  }

  beta = beta.filter(v => v.charge !== 100);
  if (beta.length > 0) {
    selectedDrone = beta[Math.floor(Math.random() * beta.length)]; // Pick a Random Drone from BETA
    dispatch({ 
      type: CHARGE_BETA_DR,
      data: selectedDrone
    });
  }

  gamma = gamma.filter(v => v.charge !== 100);
  if (gamma.length > 0) {
    selectedDrone = gamma[Math.floor(Math.random() * gamma.length)]; // Pick a Random Drone from GAMMA
    dispatch({ 
      type: CHARGE_GAMMA_DR,
      data: selectedDrone
    });
  }
}
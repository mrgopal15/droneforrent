import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import alphaReducer from './alphaReducer';
import betaReducer from './betaReducer';
import gammaReducer from './gammaReducer';
import userReducer from './userReducer';
import registrationReducer from './registrationReducer';
import onRentReducer from './onRentReducer';

export default combineReducers({
  alert: alertReducer,
  alpha: alphaReducer,
  beta: betaReducer,
  gamma: gammaReducer,
  user: userReducer,
  registrations: registrationReducer,
  onRent: onRentReducer
});
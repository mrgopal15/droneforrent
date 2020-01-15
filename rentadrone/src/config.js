import blue from '@material-ui/core/colors/blue';

export const PRIMARY_COLOR = blue;

export const MODAL_STYLE = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '20px 20px 10px',
    width: '40%',
    transform: 'translate(-50%, -50%)',
    height: '350px',
    overlfow: 'scroll'
  }
};

/* Mock Data */
export const QUAD = [
  {
    "manufacturer": "Parrot",
    "model": "Anafi",
    "maxFlightTime": "25min",
    "charge": "0%"
  }, 
  {
    "manufacturer": "Yuneec",
    "model": "Breeze",
    "maxFlightTime": "22min",
    "charge": "100%"
  }, 
  {
    "manufacturer": "Cheerson",
    "model": "CX-STARS",
    "maxFlightTime": "34min",
    "charge": "98%"
  }, 
  {
    "manufacturer": "Cheerson",
    "model": "CX-32W",
    "maxFlightTime": "7min",
    "charge": "72%"
  }, 
  {
    "manufacturer": "Cheerson",
    "model": "CX-20",
    "maxFlightTime": "15min",
    "charge": "2%"
  }, 
  {
    "manufacturer": "Blade",
    "model": "Nano QX",
    "maxFlightTime": "28min",
    "charge": "52%"
  }, 
  {
    "manufacturer": "3DR",
    "model": "Solo",
    "maxFlightTime": "20min",
    "charge": "60%"
  }, 
  {
    "manufacturer": "DJI",
    "model": "Mavic 2",
    "maxFlightTime": "31min",
    "charge": "52%"
  }, 
  {
    "manufacturer": "DJI",
    "model": "Spark",
    "maxFlightTime": "16min",
    "charge": "100%"
  }, 
  {
    "manufacturer": "DJI",
    "model": "Phantom 4",
    "maxFlightTime": "28min",
    "charge": "93%"
  }, 
  {
    "manufacturer": "Halo",
    "model": "Drone Pro",
    "maxFlightTime": "45min",
    "charge": "80%"
  }, 
  {
    "manufacturer": "Halo",
    "model": "Stealth Pro",
    "maxFlightTime": "22min",
    "charge": "93%"
  }, 
  {
    "manufacturer": "JJRC",
    "model": "H78G",
    "maxFlightTime": "15min",
    "charge": "93%"
  }, 
  {
    "manufacturer": "JJRC",
    "model": "H66",
    "maxFlightTime": "6min",
    "charge": "3%"
  }, 
  {
    "manufacturer": "JJRC",
    "model": "X7",
    "maxFlightTime": "23min",
    "charge": "23%"
  },
  {
    "manufacturer": "Walkera",
    "model": "RODEO F110",
    "maxFlightTime": "27min",
    "charge": "70%"
  }, 
  {
    "manufacturer": "Walkera",
    "model": "RODEO F150",
    "maxFlightTime": "17min",
    "charge": "93%"
  },
  {
    "manufacturer": "Walkera",
    "model": "Phantom4",
    "maxFlightTime": "28min",
    "charge": "93%"
  },
  {
    "manufacturer": "JJRC",
    "model": "H42WH",
    "maxFlightTime": "15min",
    "charge": "93%"
  },
  {
    "manufacturer": "JJRC",
    "model": "H40WH",
    "maxFlightTime": "18min",
    "charge": "93%"
  }
];

/* Types */
export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';
export const CHARGE_ALPHA_DR = 'CHARGE_ALPHA_DR';
export const CHARGE_BETA_DR = 'CHARGE_BETA_DR';
export const CHARGE_GAMMA_DR = 'CHARGE_GAMMA_DR';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const ADD_USER = 'ADD_USER';
export const SET_RENT = 'SET_RENT';
export const CLEAR_RENT = 'CLEAR_RENT';
export const RENT_ALPHA_DR = 'RENT_ALPHA_DR';
export const RENT_BETA_DR = 'RENT_BETA_DR';
export const RENT_GAMMA_DR = 'RENT_GAMMA_DR';
export const FLY_DR = 'FLY_DR';
export const RETURN_ALPHA_DR = 'RETURN_ALPHA_DR';
export const RETURN_BETA_DR = 'RETURN_BETA_DR';
export const RETURN_GAMMA_DR = 'RETURN_GAMMA_DR';
export const BAN_USER = 'BAN_USER';
export const UPDATE_REG = 'UPDATE_REG';
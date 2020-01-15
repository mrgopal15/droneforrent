import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.png';
import Alert from './Alert';
import _ from 'lodash';

export default props => {
  return (
    <div className="form">
      <h1>
        <img src={Logo} alt="logo" />
        Rent A Drone
        <img src={Logo} alt="logo" />
      </h1>
      <p>Login now to rent a Drone</p>

      <TextField error={props.error} onChange={props.handleChange} fullWidth label="Email" placeholder="Enter your Email ID" name="email" margin="normal" />
      <Button onClick={props.handleClick} className="form-btn" fullWidth variant="contained">Login</Button>
      {!_.isUndefined(props.alert.type) && <Alert type={props.alert.type} msg={props.alert.msg} />}
        
      <div className="footer">
        <Link to="register">Do not have an account? Register Now</Link>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  )
}
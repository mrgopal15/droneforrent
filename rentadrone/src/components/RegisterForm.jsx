import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.png';
import Alert from './Alert';
import _ from 'lodash';

export default props => {
  let { firstName, lastName, email, phone, firstNameErr, lastNameErr, emailErr, phoneErr } = props.state;

  return (
    <div className="form">
      <h1>
        <img src={Logo} alt="logo" />
        Rent A Drone
        <img src={Logo} alt="logo" />
      </h1>
      <p>Register now for unlimited Drone Access</p>

      <TextField error={firstNameErr} value={firstName} onChange={props.handleChange} fullWidth label="First Name" placeholder="Enter your First Name" name="firstName" margin="normal" />
      <TextField error={lastNameErr} value={lastName} onChange={props.handleChange} fullWidth label="Last Name" placeholder="Enter your Last Name" name="lastName" margin="normal" />
      <TextField error={emailErr} value={email} onChange={props.handleChange} fullWidth label="Email" placeholder="Enter your Email ID" name="email" margin="normal" />
      <TextField type="number" error={phoneErr} value={phone} onChange={props.handleChange} fullWidth label="Phone" placeholder="Enter your Phone Number" name="phone" margin="normal" />      
      <Button onClick={props.handleClick} className="form-btn" fullWidth variant="contained">Register</Button>
      {!_.isUndefined(props.alert.type) && <Alert type={props.alert.type} msg={props.alert.msg} />}
          
      <div className="footer">
        <Link to="login">Already have an account? Login Now</Link>
        <Link to="/">Go Back Home</Link>
      </div>
    </div>
  )
}
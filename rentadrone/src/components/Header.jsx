import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.png';
import Propic from '../assets/propic.jpg';
import Avatar from '@material-ui/core/Avatar';

export default props => {
  return (
    <div className="header">
      <h1 className={props.user.firstName !== undefined ? 'pull-right' : null}>
        <img src={Logo} alt="logo" />
        Rent A Drone
        <img src={Logo} alt="logo" />
      </h1>

      {props.user.firstName !== undefined && <div className="profile">
        <Avatar alt={props.user.firstName} src={Propic} />
        <p>Hi {props.user.firstName}</p>
        <Button onClick={props.handleLogOut} size="small" variant="contained">LogOut</Button>
      </div>}
    </div>
  )
}
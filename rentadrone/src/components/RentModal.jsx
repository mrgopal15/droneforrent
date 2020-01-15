import React from 'react';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { MODAL_STYLE } from '../config';
import SVG from '../assets/drone.gif';
import Alert from './Alert';
import _ from 'lodash';

export default props => {
  return (
    <div>
      <Modal isOpen={props.modalOpen} style={MODAL_STYLE}>
        {props.drone.model !== undefined && <React.Fragment>
          <h2>RENTING - {props.drone.model.toUpperCase()} ({props.drone.manufacturer.toUpperCase()})</h2>
          <img className="flying" src={SVG} alt="svg" />

          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <i className="material-icons">battery_full</i>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Charge Left" secondary={`${props.drone.charge}%`} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <i className="material-icons">battery_full</i>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Flight Time Left" secondary={`${props.drone.availableFlightTime}${props.drone.availableFlightTime === 1 ? 'min' : 'mins'}`} />
            </ListItem>
          </List>
          
          <Button onClick={props.endFlying} className="btn btn-flying" variant="contained">{!_.isUndefined(props.alert.type) ? 'Exit' : 'End Flying'}</Button>
          {!_.isUndefined(props.alert.type) && <Alert type={props.alert.type} msg={props.alert.msg} />}
        
        </React.Fragment>}
      </Modal>
    </div>
  )
}
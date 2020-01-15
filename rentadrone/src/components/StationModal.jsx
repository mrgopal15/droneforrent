import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { MODAL_STYLE } from '../config';
import drone from '../assets/drone.png';

const StationModal = props => {
  return (
    <div>
      <Modal isOpen={props.modalOpen} style={MODAL_STYLE} >
        <h2>
          STATION - {props.selectedStation !== null ? props.selectedStation.toUpperCase() : null}
          <button onClick={props.modalClose}><i className="material-icons">close</i></button>
        </h2>
        
        {props.selectedStation !== null && props[props.selectedStation].map((val, key) => (
          <Paper key={key}>
            <Grid container spacing={1}>
              <Grid item xs={3} sm={2}>
                <img src={drone} alt="drone" />
              </Grid>

              <Grid item xs={9} sm={10}>
                <Badge color="error" badgeContent={val.manufacturer}>
                  <p>{val.model}</p>
                </Badge> 

                <p>
                  Max Flight Time: {val.maxFlightTime}mins 
                  <small>(On Full Charge)</small>
                </p>   

                <p>
                  Available Flight Time: {val.availableFlightTime}min{val.availableFlightTime !== 1 ? 's' : null}
                </p>

                <p className="battery-wrapper">
                  <span className={val.charge !== 100 ? 'battery charging' : 'battery charged'}></span> 
                  {val.charge}% {val.charge !== 100 && <small>(Charging)</small>}
                </p>

                <Button disabled={val.charge < 11 || (props.user.email !== undefined && props.user.banned)} onClick={props.handleClick.bind(this, val)} variant="contained" size="small">Rent Now</Button>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Modal>
    </div>
  )
}

const stateMapToProps = ({ alpha, beta, gamma, user, }) => ({ 
  alpha, beta, gamma, user 
});

export default connect(stateMapToProps)(StationModal);
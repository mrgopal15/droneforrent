import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Station from '../components/Station';
import StationModal from '../components/StationModal';
import PopUp from '../components/PopUp';
import RentModal from '../components/RentModal';
import handleCharge from '../actions/handleCharge';
import rentDrone from '../actions/rentDrone';
import handleFlying from '../actions/handleFlying';
import returnDrone from '../actions/returnDrone';
import logout from '../actions/logoutUser';
import clearAlert from '../actions/clearAlert';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      rentModalOpen:false,
      selectedStation: null,
      showPopUp: false,
      popUpMsg: null
    }
    this.intervalHandle = null;
    this.droneList = this.droneList.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.endFlying = this.endFlying.bind(this);
  }

  componentDidMount() {
    /* Set Charging for Each Drone */
    setInterval(() => {
      let { alpha, beta, gamma } = this.props;
      this.props.handleCharge(alpha, beta, gamma);
    }, 4000);

    /* Fly Rented Drone */
    if (this.props.onRent.manufacturer !== undefined) {
      this.setState({ rentModalOpen: true });
      this.intervalHandle = setInterval(() => {
        if (this.props.onRent.charge === 0) { clearInterval(this.intervalHandle); }
        this.props.handleFlying(this.props.onRent, this.props.user);
      }, 4000);
    }
    
    /* Set PopUp for Info Msges */
    if (this.props.user.email === undefined) {
      this.setState({
        showPopUp: true,
        popUpMsg: 'You must login to rent a drone..!!'
      });
    }

    if (this.props.user.email !== undefined && this.props.user.banned) {
      this.setState({
        showPopUp: true,
        popUpMsg: 'You have been banned..!!'
      });
    }
  }

  droneList(station) {
    /* Trigger Station Modal */
    this.setState({
      modalOpen: true,
      selectedStation: station
    });
  }

  modalClose() {
    this.setState({ modalOpen: false });
  }

  async handleClick(drone) {
    this.props.clearAlert();

    /* Check for User Login */
    if (this.props.user.email === undefined) {
      this.props.history.push('/login');
      return false;
    }

    /* Start Renting the Drone */
    await this.props.rentDrone(drone);
    this.setState({ modalOpen: false, rentModalOpen: true });
    this.intervalHandle = setInterval(() => {
      if (this.props.onRent.charge === 0) { clearInterval(this.intervalHandle); }
      this.props.handleFlying(this.props.onRent, this.props.user);
    }, 4000);
  }

  async endFlying() {
    /* End Flying the Drone */
    await this.props.returnDrone(this.props.onRent);
    this.setState({ rentModalOpen: false });
  }

  async handleLogOut() {
    /* User Logout */
    await this.props.logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="main">
        <Header user={this.props.user} handleLogOut={this.handleLogOut} />

        <Station id="alpha" title="Station ALPHA" droneList={this.droneList} />
        <Station id="beta" title="Station BETA" droneList={this.droneList} />
        <Station id="gamma" title="Station GAMMA" droneList={this.droneList} />

        <StationModal 
          modalOpen={this.state.modalOpen} 
          modalClose={this.modalClose}
          selectedStation={this.state.selectedStation} 
          handleClick={this.handleClick}
        />

        <RentModal
          modalOpen={this.state.rentModalOpen} 
          drone={this.props.onRent}
          endFlying={this.endFlying}
          alert={this.props.alert}
        />

        <PopUp open={this.state.showPopUp} msg={this.state.popUpMsg} />
      </div>
    )
  }
}

const mapStateToProps = ({ alert, alpha, beta, gamma, user, onRent }) => ({ 
  alert, alpha, beta, gamma, user, onRent 
});

export default connect(mapStateToProps, { 
  handleCharge, rentDrone, handleFlying, returnDrone, logout, clearAlert 
})(Home);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import RegisterForm from '../components/RegisterForm';
import clearAlert from '../actions/clearAlert';
import registerUser from '../actions/registerUser';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      firstNameErr: false,
      lastNameErr: false,
      emailErr: false,
      phoneErr: false
    }
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    /* Check for User Login */
    if (this.props.user.email !== undefined) {
      this.props.history.push('/');
    }
    this.props.clearAlert();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleClick() {
    /* Form Validation */
    let fields = _.pick(this.state, ['firstName', 'lastName', 'email', 'phone']);
    for (let key in fields) {
      this.state[key] === '' ? this.setState({[`${key}Err`]: true}) : this.setState({[`${key}Err`]: false});
    }
    let validEmail = /\S+@\S+\.\S+/.test(this.state.email) ? true : this.setState({emailErr: true});
    if (Object.keys(fields).filter(v => this.state[v] === '').length > 0 || !validEmail) return false;

    /* Add User */
    await this.props.registerUser(fields, this.props.registrations);
    if (this.props.alert.type === 'success') this.setState({...this.initialState});
  }

  render() {
    return (
      <div className="user-wrapper">
        <Grid container spacing={0}>
          <Grid className="bg-image" item xs={12} sm={6}></Grid>
          
          <Grid className="form-block" item xs={12} sm={6}>
            <RegisterForm 
              handleChange={this.handleChange} 
              handleClick={this.handleClick}
              state={this.state}
              alert={this.props.alert}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ alert, user, registrations }) => ({ 
  alert, user, registrations 
});

export default connect(mapStateToProps, { clearAlert, registerUser })(Register);
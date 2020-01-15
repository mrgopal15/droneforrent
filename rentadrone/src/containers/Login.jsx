import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../components/LoginForm';
import clearAlert from '../actions/clearAlert';
import loginUser from '../actions/loginUser';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      error: false
    }
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
    let validEmail = /\S+@\S+\.\S+/.test(this.state.email) ? true : this.setState({error: true});
    if (!validEmail) return false;

    /* Add User */
    await this.props.loginUser(this.state.email, this.props.registrations);
    if (this.props.alert.type === 'success') this.props.history.push('/');
  }

  render() {
    return (
      <div className="user-wrapper">
        <Grid container spacing={0}>
          <Grid className="bg-image" item xs={12} sm={6}></Grid>
          
          <Grid className="form-block" item xs={12} sm={6}>
            <LoginForm 
              handleChange={this.handleChange} 
              handleClick={this.handleClick}
              error={this.state.error}
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

export default connect(mapStateToProps, { clearAlert, loginUser })(Login);
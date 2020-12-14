import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class Signup extends Component {

  constructor(props) {

      super(props);
      this.state = {
        email: "",
        name: "",
        password: ""
      }

      this.onBackClick = this.onBackClick.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onBackClick() {
    this.props.history.push("/");
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    }

    axios.post(url + '/auth/signup', user)
      .then(authResult => {
        console.log(authResult);    
        this.props.history.push("/login");   
      })
      .catch(err => {
          console.log(err);
      })
  }

  render() {

    return (
      <div className="signup__background">
        <div className="signup__blur">
          <div className="signup__block">
            <div className="signup__text">Create Account</div>
            <div className="signup__horline"></div>
            <form onSubmit={this.onSubmit} autocomplete="off">
              <div className="signup__inputs">
                <div className="signup__label">Email:</div>
                <input type="email" name="email" className="signup__input" 
                onChange={this.onChangeEmail}/>
                <div className="signup__label">Name:</div>
                <input type="text" name="name" className="signup__input" 
                onChange={this.onChangeName}/>
                <div className="signup__label">Password:</div>
                <input type="password" name="password" className="signup__input" 
                onChange={this.onChangePassword}/>
              </div>
              <button className="signup__button" type="submit">Confirm</button>
              <button className="signup__button__back" onClick={this.onBackClick}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
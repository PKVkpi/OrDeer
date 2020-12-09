import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class Login extends Component {

  constructor(props) {

      super(props);
      this.state = {
        email: "",
        password: ""
      }

      this.onBackClick = this.onBackClick.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onBackClick() {
    this.props.history.push("/");
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("asd");

    const user = {
      email: this.state.email,
      password: this.state.password,
    }

    axios.post(url + '/auth/login', user)
      .then(authResult => {
        console.log(authResult);
        // const id = JSON.parse(authResult.config).id;    
        this.props.history.push("/user");   
      })
      .catch(err => {
          console.log(err);
      })
  }

  render() {
    return (
      <div className="login__background">
        <div className="login__blur">
          <div className="login__block">
            <div className="login__text">Log in</div>
            <div className="login__horline"></div>
            <form onSubmit={this.onSubmit} autocomplete="off">
              <div className="login__inputs">
                <div className="login__label">Email:</div>
                <input type="email" name="email" className="login__input"
                onChange={this.onChangeEmail} />
                <div className="login__label">Password:</div>
                <input type="password" name="password" className="login__input" 
                onChange={this.onChangePassword} />
              </div>
              <button className="login__button" type="submit">Confirm</button>
              <button className="login__button__back" onClick={this.onBackClick}>Back</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
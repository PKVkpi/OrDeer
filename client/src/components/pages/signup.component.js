import React, { Component } from 'react';

export default class Signup extends Component {

  constructor(props) {

      super(props);
      this.state = {
      }

      this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {
    this.props.history.push("/");
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
                <input type="email" name="email" className="signup__input"/>
                <div className="signup__label">Name:</div>
                <input type="text" name="name" className="signup__input"/>
                <div className="signup__label">Password:</div>
                <input type="password" name="password" className="signup__input"/>
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
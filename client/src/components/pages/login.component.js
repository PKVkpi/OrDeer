import React, { Component } from 'react';

export default class Login extends Component {

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
      <div className="login__background">
        <div className="login__blur">
          <div className="login__block">
            <div className="login__text">Log in</div>
            <div className="login__horline"></div>
            <form onSubmit={this.onSubmit} autocomplete="off">
              <div className="login__inputs">
                <div className="login__label">Email:</div>
                <input type="email" name="email" className="login__input"/>
                <div className="login__label">Password:</div>
                <input type="password" name="password" className="login__input"/>
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
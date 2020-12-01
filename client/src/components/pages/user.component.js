import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';

export default class User extends Component {

  constructor(props) {

      super(props);
      this.state = {
        email: "examlpe@mail.com",
        name: "Username",
        role: "User"
      }

      this.onBackClick = this.onBackClick.bind(this);
  }

  onBackClick() {
    this.props.history.push("/");
  }

  render() {

    return (
      <div className="user__background">
        <div className="user__blur">
          <div className="user__block">
            <div className="user__text">User page</div>
            <div className="user__horline"></div>
              <div className="user__infos">
                <div className="user__label">Email:</div>
                <div className="user__info">{this.state.email}</div>
                <div className="user__label">Name:</div>
                <div className="user__info">{this.state.name}</div>
                <div className="user__label">Role:</div>
                <div className="user__info">{this.state.role}</div>
              </div>
              <button className="user__button" type="submit">Log out</button>
              <button className="user__button__back" onClick={this.onBackClick}>Back</button>
          </div>
        </div>
      </div>
    )
  }
}
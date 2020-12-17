import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import config from '../../config/config'
const url = config.url;

export default class User extends Component {

  constructor(props) {
      super(props);
      this.state = {
        userId: this.props.match.params.id,
        email: null,
        name: null,
        role: null
      }

      this.onBackClick = this.onBackClick.bind(this);
      this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  componentDidMount() {
    let mUser;
    axios.get(url + "/users/" + this.state.userId)
        .then(user => {
          mUser = user;
          return this.setState({ name: user.data.name});
        })
        .then(res => {
          return this.setState({ email: mUser.data.email });
        })
        .then(res => {
          if (mUser.data.role)
            return this.setState({ role: "Admin" });
          else 
            return this.setState({ role: "User" });
        })
        .then(res => {
          this.setState({ loading: false });
        })
        .catch(err => {
            console.log(err);
        })
  }

  onBackClick() {
    this.props.history.push("/");
  }

  onLogoutClick() {
    Cookies.remove('id'); 
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
              <button className="user__button" onClick={this.onLogoutClick}>Log out</button>
              <button className="user__button__back" onClick={this.onBackClick}>Back</button>
          </div>
        </div>
      </div>
    )
  }
}
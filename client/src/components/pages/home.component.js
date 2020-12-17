import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';

export default class Home extends Component {

  constructor(props) {

      super(props);
      this.state = {
          loading: true,
          images: []
      }

      this.onJoinClick = this.onJoinClick.bind(this);
  }

  componentDidMount() {
  }

  onJoinClick() {
    this.props.history.push("/signup");
  }

  render() {

    return (
      <div className="home__background" >
        <Navbar />
        <div className="home__text">
          <div className="home__title">Food for everyone</div>
          <div className="home__subtitle">Don't wait for food. Food will wait for you</div>
          <div  className="home__subtitle">
            <button className="button__join" onClick={this.onJoinClick}>Join us</button>
          </div>
        </div>
      </div>
    )
  }
}
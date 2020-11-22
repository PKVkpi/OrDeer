import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';

//import axios from 'axios';
//import config from '../config/config';
//const url = config.url;

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
      // document.title = "Carona";
      // axios.get(url + window.location.pathname)
      //     .then(res => {
      //         this.setState({ images: res.data[0].images });
      //     })
      //     .catch(err => {
      //         console.log("An error occured in componentDidMount in home.component\n", err);
      //     })
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
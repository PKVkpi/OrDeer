import React, { Component } from 'react';

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
  }

  componentDidMount() {
      document.title = "Carona";
      // axios.get(url + window.location.pathname)
      //     .then(res => {
      //         this.setState({ images: res.data[0].images });
      //     })
      //     .catch(err => {
      //         console.log("An error occured in componentDidMount in home.component\n", err);
      //     })
  }

  render() {

    function handleClick(e) {
      e.preventDefault();
      console.log('По ссылке кликнули.');
    }

    return (
      <div className="home__background" >
        <div className="home__text">
          <div className="home__title">Food for everyone</div>
          <div className="home__subtitle">Don't wait for food. Food will wait for you</div>
          <div  className="home__subtitle">
            <button className="button__join" disabled={false}>Join us</button>
          </div>
        </div>
      </div>
    )
  }
}
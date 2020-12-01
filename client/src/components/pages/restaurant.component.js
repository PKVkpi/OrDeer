import React, { Component } from 'react';
// import config from '../config/config';
// const url = config.client;
const url = 'http://localhost:3000';

export default class Restaurant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.restaurant._id,
            name: this.props.restaurant.name,
            region: this.props.restaurant.region,
            image: this.props.restaurant.image,
        }

    }

    render() {

        // const mainMenuInfo = this.state.brand + " " + this.state.model + " " + this.state.year;
        // const menuURL = url + "/menus/" + this.state.id;

        const restaurantUrl = url + "/restaurants/" + this.state.id;

        return (
          <div className="restaurant__wrapper">
            <div className="image-cropper">
                <a href={restaurantUrl}>
                  <img className="restaurant__img" src={this.state.image} alt="restaurant"></img>
                  <div className="restaurant__overlay">
                    <div className="restaurant__overlay__text" href={restaurantUrl}>{this.state.name}</div>
                  </div>
                </a>
            </div>
          </div>
        )
    }
}
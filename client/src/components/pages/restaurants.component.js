import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';
import RestaurantList from '../parts/restaurant-list.component';
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class Restaurant extends Component {

  constructor(props) {

      super(props);
      this.state = {
          loading: true,
          images: [],
          district: "All",
          restaurants: [],
          loading: true
      }
  }

  componentDidMount() {
    document.title = "Restaurants";

    axios.get(url + '/restaurants')
      .then(restaurants => {
        console.log(restaurants.data);
        this.setState({restaurants: restaurants.data, loading: false});
      })
      .catch(err => {
          console.log(err);
      })
}

  render() {

    return (
      <div className="restaurants__background" >
        <Navbar />
        <div className="restaurants__blur">
          <div className="restaurants__block">
            <ul className="restaurants__ul">
              <div className="restaurants__left">
                <li className="restaurants__li">
                  <div className="restaurants__district">District: <span className="bold">{this.state.district}</span></div>
                </li>
              </div>
              <div className="restaurants__right">
                <li className="restaurants__li">
                  <button className="restaurants__filter">Filter</button>
                </li>
              </div>
            </ul>
            {this.state.loading ? "Loading..." : 
            <>
              <RestaurantList restaurants={this.state.restaurants} />
            </>}
          </div>
        </div>
      </div>
    )
  }
}
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
          // restaurants: [
          //   {_id: 0, name: "nfhiufhdsfwqeqweqee", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 1, name: "name1", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 2, name: "name2", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 3, name: "name0", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 4, name: "name1", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 5, name: "name2", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 6, name: "name0", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 7, name: "name1", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 8, name: "name2", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 9, name: "name0", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 10, name: "name1", district: "district1", image: "../images/background-food2.jpg"},
          //   {_id: 11, name: "name2", district: "district1", image: "../images/background-food2.jpg"},
          // ],
      }
  }

  componentDidMount() {
    document.title = "Restaurants";

    axios.get(url + '/restaraunts/')
      .then(restaurants => {
        console.log(restaurants.data);
        this.setState({restaurants: restaurants.data, loading: false});
        // const id = JSON.parse(authResult.config).id;    
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
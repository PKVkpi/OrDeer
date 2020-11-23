import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';
import RestaurantList from './restaurant-list.component';

export default class Restaurant extends Component {

  constructor(props) {

      super(props);
      this.state = {
          loading: true,
          images: [],
          region: "All",
          restaurants: [
            {_id: 0, name: "nfhiufhdsfwqeqweqee", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 1, name: "name1", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 2, name: "name2", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 3, name: "name0", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 4, name: "name1", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 5, name: "name2", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 6, name: "name0", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 7, name: "name1", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 8, name: "name2", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 9, name: "name0", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 10, name: "name1", region: "region1", image: "../images/background-food2.jpg"},
            {_id: 11, name: "name2", region: "region1", image: "../images/background-food2.jpg"},
          ],
      }
  }

  componentDidMount() {
    document.title = "Restaurants";

    // id: this.props.menu._id,
    // name: this.props.menu.name,
    // region: this.props.menu.region,
    // image: this.props.menu.image
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
                  <div className="restaurants__region">Region: <span className="bold">{this.state.region}</span></div>
                </li>
              </div>
              <div className="restaurants__right">
                <li className="restaurants__li">
                  <button className="restaurants__filter">Filter</button>
                </li>
              </div>
            </ul>
            <RestaurantList restaurants={this.state.restaurants} />
          </div>
        </div>
      </div>
    )
  }
}
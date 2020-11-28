import React, { Component } from 'react';
import Restaurant from "../pages/restaurant.component";

export default class RestaurantList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            restaurants: this.props.restaurants,
        }
    }

    RestaurantList() {
        return this.state.restaurants.map(restaurant => {
            return (
                <li className="restaurant__li" key={restaurant._id}>
                    <Restaurant restaurant={restaurant} />
                </li>
            )
        })
    }

    render() {
        return (
            <div className="restaurant-list__list">
                <ul className="restaurants__ul">
                    {this.RestaurantList()}
                </ul>
            </div>
        )
    }
}
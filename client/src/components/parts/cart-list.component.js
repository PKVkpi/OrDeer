import React, { Component } from 'react';
import CartItem from "./cart-item.component";
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class CartList extends Component {

    constructor(props) {
      super(props);

      this.state = {
        dishes: this.props.dishes,
        price: 0,
        loading: true
      }
    }

    componentDidMount() {
      let price = 0;
      this.state.dishes.forEach(dish => {
        price += dish.price;
      });
      this.setState({ price: price, loading: false });
    }

    CartList() {
      return this.state.dishes.map(dish => {
        return (
          <li className="cart__li" key={dish._id}>
            <CartItem item={dish} />
          </li>
        )
      })
    }

    render() {
        return (
          <div className="menu__list">
            <ul>
              {this.CartList()}
              {this.state.loading ?
                <>
                </> :
                <li className="cart__li">
                  <div className="cart__item">
                    <div className="item-text">Total:</div>
                    <div className="item-text">{this.state.price}</div>
                  </div>
                </li>
                }
            </ul>
          </div>
        )
    }
}
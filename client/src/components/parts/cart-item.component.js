import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import config from '../../config/config'
const url = config.url;

export default class CartItem extends Component {

  constructor(props) {
      super(props);

      this.state = {
          id: this.props.item._id,
          name: this.props.item.name,
          price: this.props.item.price,
      }

      this.onItemRemove = this.onItemRemove.bind(this);
      this.filterCart = this.filterCart.bind(this);
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  filterCart(cart) {
    for (let i = 0; i < cart.length; ++i) {
      if (cart[i] === this.state.id) {
        cart.splice(i, 1);
        break;
      }
    }
    this.setState({cart: cart});
  }

  onItemRemove() {
    const userId = Cookies.get('id');

    axios.get(url + "/users/" + userId)
      .then(user => {
        this.setState({cart: user.data.cart});
        return this.filterCart(this.state.cart);
      })
      .then(res => {
        const mUser = {
          cart: this.state.cart
        }
        return axios.put(url + "/users/" + userId, mUser,  { withCredentials: true, credentials: 'include' });
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="cart__item">
        <div className="item__text">{this.state.name}</div>
        <div className="item__text">{this.state.price}</div>
        <div className="item__text__remove" onClick={this.onItemRemove}>Remove</div>
      </div>
  )}
}
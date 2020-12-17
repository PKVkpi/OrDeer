import React, { Component } from 'react';
import axios from 'axios';
import CartList from '../parts/cart-list.component';
import config from '../../config/config'
const url = config.url;

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id,
      cart: [],
      dishes: [],
      loading: true
    }

    this.onBackClick = this.onBackClick.bind(this);
    this.onConfirmClick = this.onConfirmClick.bind(this);
    this.filterDishes = this.filterDishes.bind(this);
  }

  filterDishes(dishes) {
    let filteredDishes = [];
    let start = 0;

    dishes.forEach(dish => {
      for (let i = start; i < this.state.cart.length; ++i) {
        if (dish._id === this.state.cart[i])
          filteredDishes.push(dish);
        start += 1;
      }
    });
    this.setState({ dishes: filteredDishes });
  }

  componentDidMount() {
    axios.get(url + "/users/" + this.state.userId)
      .then(user => {
        this.setState({ cart: user.data.cart});
        return axios.get(url + "/dishes");
      })
      .then(dishes => {
        this.filterDishes(dishes.data);
        return this.setState({ loading: false });
      })
      .catch(err => {
          console.log(err);
      })
  }

  onBackClick() {
    this.props.history.push("/");
  }

  onConfirmClick() {
    // Cookies.remove('id'); 
    // this.props.history.push("/");
  }

  render() {

    return (
      <div className="cart__background">
        <div className="cart__blur">
          <div className="cart__block">
            <div className="cart__text">Shopping cart</div>
            <div className="cart__horline"></div>
              <div className="cart__infos">
                {this.state.loading ? 
                  <>
                  </> :
                  <>
                    <CartList dishes={this.state.dishes}/>
                  </>
                }
              </div>
              <button className="cart__button" onClick={this.onConfirmClick}>Confirm</button>
              <button className="cart__button__back" onClick={this.onBackClick}>Back</button>
          </div>
        </div>
      </div>
    )
  }
}
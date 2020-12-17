import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import config from '../../config/config'
const url = config.url;

export default class Restaurant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.item._id,
            name: this.props.item.name,
            description: this.props.item.description,
            price: this.props.item.price,
            inStock: this.props.item.inStock,
            history: this.props.history,
            duration: 0
        }

        this.inCartAdd = this.inCartAdd.bind(this);
    }

    inCartAdd() {
      const userId = Cookies.get('id');

      const mUser = {
        cart: []
      }

      axios.get(url + "/users/" + userId)
        .then(user => {
          mUser.cart = user.data.cart;
          mUser.cart.push(this.state.id);
          return axios.put(url + "/users/" + userId, mUser,
           { withCredentials: true, credentials: 'include' });
        })
        .then(res => {
          this.setState({duration: 4000});
        })
        .catch(err => {
          console.log(err);
          this.state.history.push("/login");
        })
    }

    render() {
      let styleColor;
      if (this.state.inStock == true)
        styleColor = {color: "rgba(0, 255, 0, 0.5)"}
      else 
        styleColor = {color: "rgba(255, 0, 0, 0.5)"}

      return (
        <div>
          <div className="item__text">Name: {this.state.name}</div>
          <div className="item__text">Description: {this.state.description}</div>
          <div className="item__text">Price: {this.state.price}</div>
          <div className="item__text__addCart" style={styleColor} onClick={this.inCartAdd}>Add to cart</div>
        </div>
      )
    }
}
import React, { Component } from 'react';

export default class Restaurant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.item._id,
            name: this.props.item.name,
            description: this.props.item.description,
            price: this.props.item.price,
            inStock: this.props.item.inStock
        }

        this.inCartAdd = this.inCartAdd.bind(this);
    }

    inCartAdd() {
      console.log("In cart");
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
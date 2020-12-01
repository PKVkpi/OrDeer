import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';
import Carousel from 'react-bootstrap/Carousel';
import MenuList from '../parts/menu-list.component';

export default class Restaurant extends Component {

  constructor(props) {

      super(props);
      this.state = {
          name: "Name",
          description: "Description descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin descriptoin",
          address: "Address address address",
          images: [
            "https://images.pexels.com/photos/4577179/pexels-photo-4577179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ],
          menu: [
            {snacks: [{name: 'snack1', price: 100, description: 'description1', inStock: true},
                      {name: 'snack2', price: 100, description: 'description2', inStock: false}],
            mainDishes: [{name: 'mainDish1', price: 100, description: 'description1', inStock: true},
                        {name: 'mainDish2', price: 100, description: 'description2', inStock: false}],
            desserts: [{name: 'dessert1', price: 100, description: 'description1', inStock: true},
                        {name: 'dessert2', price: 100, description: 'description2', inStock: false}],
            drinks: [{name: 'drink1', price: 100, description: 'description1', inStock: true},
                    {name: 'drink2', price: 100, description: 'description2', inStock: false}]
            }
          ]
      }

  }

  CarouselImages() {
    let images = [];

    for (let i = 0; i < this.state.images.length; i++) {
        images.push(<Carousel.Item key={i}>
            <img
                className="d-block w-100"
                src={this.state.images[i]}
                alt="restaurant"
            />
        </Carousel.Item>);
    }
    return images;
}

  render() {

    const carousel = (
      <Carousel interval="2000" indicators={false}>
          {this.CarouselImages()}
      </Carousel>
    )

    return (
      <div className="restaurant__background" >
        <Navbar />
        <div className="restaurants__blur">
          {carousel}
          {/* <div className="container"> */}
          <div className="restaurant__text">
            <div className="restaurant__title">
              {this.state.name}
            </div>
            <div className="restaurant__description">
              {this.state.description}
            </div>
            <div className="title__text"><span className="title__span">Address</span></div>
            <div className="restaurant__description">
              {this.state.address}
            </div>
            <div className="title__text"><span className="title__span">Menu</span></div>
            <MenuList menu={this.state.menu}/>
          </div>
          {/* </div> */}
        </div>
      </div>
    )
  }
}
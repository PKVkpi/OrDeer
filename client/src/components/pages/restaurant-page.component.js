import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

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
          ]
      }

  }

  componentDidMount() {
    console.log(window.location.pathname);
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
            <div className="title_text"><span className="title_span">Address</span></div>
            <div className="restaurant__description">
              {this.state.address}
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    )
  }
}
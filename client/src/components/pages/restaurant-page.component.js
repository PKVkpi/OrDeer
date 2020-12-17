import React, { Component } from 'react';
import Navbar from '../parts/navbar.component';
import Carousel from 'react-bootstrap/Carousel';
import MenuList from '../parts/menu-list.component';
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class Restaurant extends Component {

  constructor(props) {

      super(props);
      this.state = {
          name: "",
          address: "",
          description: "",
          images: [],
          dishIDs: [],
            // {
            //   snacks: []
            // },
            // {
            //   mainDishes: []
            // },
            // {
            //   desserts: []
            // },
            // {
            //   drinks: []
            // }
            // {snacks: [{name: 'snack1', price: 100, description: 'description1', inStock: true},
            //           {name: 'snack2', price: 100, description: 'description2', inStock: false}],
            // mainDishes: [{name: 'mainDish1', price: 100, description: 'description1', inStock: true},
            //             {name: 'mainDish2', price: 100, description: 'description2', inStock: false}],
            // desserts: [{name: 'dessert1', price: 100, description: 'description1', inStock: true},
            //             {name: 'dessert2', price: 100, description: 'description2', inStock: false}],
            // drinks: [{name: 'drink1', price: 100, description: 'description1', inStock: true},
            //         {name: 'drink2', price: 100, description: 'description2', inStock: false}]
            // }
          // ],
          loading: true
      }
      // this.sortMenu = this.sortMenu.bind(this);
  }

  // sortMenu(menu) {
  //   return menu.data.dishIDs.map(dishId => {
  //     axios.get(url + "/dishes/" + dishId)
  //       .then(dish => {
  //         console.log("------");
  //         console.log(this.state.menu.mainDishes);
  //         console.log("------");
  //         if (dish.data.type === 2)
  //         {
  //           this.setState({
  //             menu: this.state.menu.mainDishes.concat(dish.data)
  //           });
  //         }

  //         if (dishId === menu.data.dishIDs[menu.data.dishIDs.length - 1])
  //           this.setState({ loading: false });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  //   })
  // }

  componentDidMount() {
    document.title = "Restaurants";

    axios.get(url + window.location.pathname)
      .then(restaurant => {
        this.setState({
          name: restaurant.data.name,
          address: restaurant.data.address,
          description: restaurant.data.description,
          images: restaurant.data.imageURLs
        });
        return axios.get(url + '/menus/' + restaurant.data.menuId);
      })
      .then(menu => {
        console.log(menu.data.dishIDs);
        this.setState({dishIDs: menu.data.dishIDs, loading: false});
      })
      .catch(err => {
          console.log(err);
      })
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
        {this.state.loading ? "Loading" :
          <>
            <div className="restaurants__blur">
              {carousel}
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
                <MenuList dishIDs={this.state.dishIDs} history={this.props.history}/>
              </div>
            </div>
          </>
        }
      </div>
    )
  }
}
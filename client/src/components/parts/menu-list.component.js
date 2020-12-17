import React, { Component } from 'react';
import MenuItem from "./menu-item.component";
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class RestaurantList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          dishIDs: this.props.dishIDs,
          history: this.props.history,
          snacks: [],
          mainDishes: [],
          desserts: [],
          drinks: []
        }

        this.showSnacksList = this.showSnacksList.bind(this);
        this.showMainDishesList = this.showMainDishesList.bind(this);
        this.showDessertsList = this.showDessertsList.bind(this);
        this.showDrinksList = this.showDrinksList.bind(this);
    }

    componentDidMount() {
      this.state.dishIDs.map(dishId => {
        axios.get(url + '/dishes/' + dishId)
          .then(dish => {
            console.log(dish);
            if (dish.data.type === 2)
            {
              this.setState({ mainDishes : this.state.mainDishes.concat(dish.data) });
            }
          })
          .catch(err => {
            console.log(err);
          })
      });

      // this.setState({snacks: this.props.menu[0].snacks});
      // this.setState({mainDishes: this.props.menu[1].mainDishes});
      // this.setState({desserts: this.props.menu[2].desserts});
      // this.setState({drinks: this.props.menu[3].drinks});
    }

    SnacksList() {
        return this.state.snacks.map(snack => {
            return (
                <li className="snack__li" key={snack._id}>
                  <MenuItem item={snack} history={this.state.history}/>
                </li>
            )
        })
    }

    MainDishesList() {
      return this.state.mainDishes.map(mainDish => {
          return (
              <li className="mainDish__li" key={mainDish._id}>
                <MenuItem item={mainDish} history={this.state.history}/>
              </li>
          )
      })
    }

    DessertsList() {
      return this.state.desserts.map(dessert => {
          return (
              <li className="dessert__li" key={dessert._id}>
                <MenuItem item={dessert} history={this.state.history}/>
              </li>
          )
      })
    }

    DrinksList() {
      return this.state.drinks.map(drink => {
          return (
              <li className="drink__li" key={drink._id}>
                <MenuItem item={drink} history={this.state.history} />
              </li>
          )
      })
    }

    showSnacksList() {
      let l = document.getElementById("menu__list__snacks");
      if (l.style.display === "flex") {
        l.style.display = "none";
      } else {
        l.style.display = "flex";
      }
    }

    showMainDishesList() {
      let l = document.getElementById("menu__list__mainDishes");
      if (l.style.display === "flex") {
        l.style.display = "none";
      } else {
        l.style.display = "flex";
      }
    }

    showDessertsList() {
      let l = document.getElementById("menu__list__desserts");
      if (l.style.display === "flex") {
        l.style.display = "none";
      } else {
        l.style.display = "flex";
      }
    }

    showDrinksList() {
      let l = document.getElementById("menu__list__drinks");
      if (l.style.display === "flex") {
        l.style.display = "none";
      } else {
        l.style.display = "flex";
      }
    }

    render() {
        return (
            <div className="menu__list">
              <div className="menu__button" onClick={this.showSnacksList}>Snacks</div>
              <ul id="menu__list__snacks">
                {this.SnacksList()}
              </ul>
              <div className="menu__button" onClick={this.showMainDishesList}>Main Dishes</div>
              <ul id="menu__list__mainDishes">
                {this.MainDishesList()}
              </ul>
              <div className="menu__button" onClick={this.showDessertsList}>Desserts</div>
              <ul id="menu__list__desserts">
                {this.DessertsList()}
              </ul>
              <div className="menu__button" onClick={this.showDrinksList}>Drinks</div>
              <ul id="menu__list__drinks">
                {this.DrinksList()}
              </ul>
            </div>
        )
    }
}
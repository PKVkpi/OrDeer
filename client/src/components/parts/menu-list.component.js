import React, { Component } from 'react';
import MenuItem from "./menu-item.component";

export default class RestaurantList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          //id: this.props.menu.id,
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
      this.setState({snacks: this.props.menu[0].snacks});
      this.setState({mainDishes: this.props.menu[0].mainDishes});
      this.setState({desserts: this.props.menu[0].desserts});
      this.setState({drinks: this.props.menu[0].drinks});
    }

    SnacksList() {
        return this.state.snacks.map(snack => {
            return (
                <li className="snack__li" key={snack._id}>
                  <MenuItem item={snack} />
                </li>
            )
        })
    }

    MainDishesList() {
      return this.state.mainDishes.map(mainDish => {
          return (
              <li className="mainDish__li" key={mainDish._id}>
                <MenuItem item={mainDish} />
              </li>
          )
      })
    }

    DessertsList() {
      return this.state.desserts.map(dessert => {
          return (
              <li className="dessert__li" key={dessert._id}>
                <MenuItem item={dessert} />
              </li>
          )
      })
    }

    DrinksList() {
      return this.state.drinks.map(drink => {
          return (
              <li className="drink__li" key={drink._id}>
                <MenuItem item={drink} />
              </li>
          )
      })
    }

    showSnacksList() {
      let l = document.getElementById("menu__list__snacks");
      if (l.style.display === "block") {
        l.style.display = "none";
      } else {
        l.style.display = "block";
      }
    }

    showMainDishesList() {
      let l = document.getElementById("menu__list__mainDishes");
      if (l.style.display === "block") {
        l.style.display = "none";
      } else {
        l.style.display = "block";
      }
    }

    showDessertsList() {
      let l = document.getElementById("menu__list__desserts");
      if (l.style.display === "block") {
        l.style.display = "none";
      } else {
        l.style.display = "block";
      }
    }

    showDrinksList() {
      let l = document.getElementById("menu__list__drinks");
      if (l.style.display === "block") {
        l.style.display = "none";
      } else {
        l.style.display = "block";
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
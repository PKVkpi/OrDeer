import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/home.component';
import Signup from './components/pages/signup.component';
import Login from './components/pages/login.component';
import User from './components/pages/user.component';
import Cart from './components/pages/cart.component';
import Restaurants from './components/pages/restaurants.component';
import Restaurant from './components/pages/restaurant-page.component';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/users/:id/cart" component={Cart} />
            <Route exact path="/restaurants/:id" component={Restaurant} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router >
    );
  }
}
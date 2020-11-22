import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/pages/home.component';
import Signup from './components/pages/signup.component';
import Login from './components/pages/login.component';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router >
    );
  }
}
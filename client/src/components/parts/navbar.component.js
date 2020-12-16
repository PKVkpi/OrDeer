import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
const url = config.url;

export default class Navbar extends Component {

  constructor(props) {
      super(props);

      this.state = {
        loading: true,
        id: "",
        name: ""
      }
  }

  componentDidMount() {
    axios.get(url + '/users/me')
      .then(authResult => {
        console.log(authResult);
        if (authResult) {
          this.setState({ });
        }
      })
      .catch(err => {
          console.log(err);
      })
  }

  render() {
    return (
        <nav className="uppernav">
            <ul className="uppernav__ul">
              <div className="uppernav_left">
                <li className="uppernav__li"><a className="uppernav__logo" href="/">Or<span className="bold">Deer</span></a></li>
              </div>
              <div className="uppernav__right">
                <li className="uppernav__li"><a className="uppernav__link" href="/restaurants">Restaurants</a></li>
                <li className="uppernav__li"><a className="uppernav__link" href="/">About</a></li>
                <li className="uppernav__li"><span className="uppernav__link" href="/">|</span></li>

                {this.state.loading ? 
                  <>
                    <li className="uppernav__li"><a className="uppernav__link" href="/signup"><span className="bold">Sign up</span></a></li>
                    <li className="uppernav__li"><a className="uppernav__link" href="/login">Log in</a></li>
                  </> :
                  <>

                  </>
                }
                
              </div>
            </ul>
        </nav>
    )
  }
}
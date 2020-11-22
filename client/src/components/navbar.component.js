import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
      super(props);

      this.state = {}
  }

  render() {
    return (
        <nav className="uppernav">
            <ul className="uppernav__ul">
              <div className="uppernav_left">
                <li className="uppernav__li"><a className="uppernav__logo" href="/">Or<span className="bold">Deer</span></a></li>
              </div>
              <div className="uppernav__right">
                <li className="uppernav__li"><a className="uppernav__link" href="/">About us</a></li>
                <li className="uppernav__li"><span className="uppernav__link" href="/">|</span></li>
                <li className="uppernav__li"><a className="uppernav__link" href="/"><span className="bold">Sign up</span></a></li>
                <li className="uppernav__li"><a className="uppernav__link" href="/">Log in</a></li>
              </div>
            </ul>
        </nav>
    )
  }
}
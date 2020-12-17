import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import config from '../../config/config'
const url = config.url;

// const Navbar = props => {
//   const [loading, setLoading] = React.useState(false);
//   React.useEffect(() => {
    
//   }, [])
//   return (
//     <div>{loading}</div>
//   )
// }

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      loading: true,
      authorized: false,
      userId: Cookies.get("id"),
      name: null
    }
  }

  componentDidMount() {
    if (this.state.userId)
    {
      axios.get(url + "/users/" + this.state.userId)
        .then(user => {
          return this.setState({ name: user.data.name});
        })
        .then(res => {
          return this.setState({ authorized: true });
        })
        .then(res => {
          this.setState({ loading: false });
        })
        .catch(err => {
            console.log(err);
        })
    }
    else 
      this.setState({ loading: false });
  }

  render() {
    const userUrl = "/users/" + this.state.userId;
    const userCart = userUrl + "/cart";

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
              </> :
              <>
                {this.state.authorized ?
                  <>
                    <li className="uppernav__li"><a className="uppernav__link" href={userUrl}>{this.state.name}</a></li>
                    <li className="uppernav__li"><a className="uppernav__link" href={userCart}>Cart</a></li>
                  </> :
                  <>
                    <li className="uppernav__li"><a className="uppernav__link" href="/signup"><span className="bold">Sign up</span></a></li>
                    <li className="uppernav__li"><a className="uppernav__link" href="/login">Log in</a></li>
                  </>
                }
              </>
            }
          </div>
        </ul>
      </nav>
    )
  }
}
import React, { Component } from 'react';
import MenuList from './menu-list.component';

export default class Menu extends Component {
  constructor(props) {
      super(props);

      this.state = {
        menu: this.props.menu
      }
  }

  render() {
    return (
      <div menu={this.state.menu}>{MenuList}</div>
    )
  }
}
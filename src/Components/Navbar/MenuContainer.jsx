import React, { Component } from 'react';

import Menu from './MenuComponent';
import Item from './MenuItemComponent';
import Dropdown from './MenuDropDownComponent';


export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }


  render() {
    return (
      <Menu
        handleToggle={this.toggle}
        isOpen={this.state.isOpen}
      >
        <Item
          name="Home"
          to="/"
        />
        <Dropdown
          name="Options"
          items={[
              {
                  name: '1',
                  to: '/1',
              },
              {
                  name: '2',
                  to: '/2',
              },
              {
                  name: '3',
                  to: '/3',
              },
          ]}
        />
      </Menu>
    );
  }
}

import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import Menu from './MenuComponent';
import Item from './MenuItemComponent';
// import Dropdown from './MenuDropDownComponent';


export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      isOpen: false,
      blogTooltipIsOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleTooltip() {
    console.log('attempt toggle');
    this.setState({
      blogTooltipIsOpen: !this.state.blogTooltipIsOpen,
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
        <Item
          name="Resume"
          to="https://s3.us-east-2.amazonaws.com/tconchie-assets/Tom+Conchie+Resume+(1).pdf"
        />
        <Item
          id="blog-link"
          name="Blog"
          to="/blog"
          disabled
        />
        <Tooltip
          placement="bottom"
          isOpen={this.state.blogTooltipIsOpen}
          target="blog-link"
          toggle={this.toggleTooltip}
        >
          Blog coming soon! (~6/18/2018)
        </Tooltip>

        {/* <Dropdown
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
        /> */}
      </Menu>
    );
  }
}

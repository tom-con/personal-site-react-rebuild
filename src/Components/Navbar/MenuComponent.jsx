import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

MenuComponent.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default function MenuComponent({ children }) {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {children}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

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
  handleToggle: PropTypes.instanceOf(PropTypes.func).isRequired,
  isOpen: PropTypes.bool.isRequired,
};


export default function MenuComponent({ children, handleToggle, isOpen }) {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tom Conchie</NavbarBrand>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {children}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

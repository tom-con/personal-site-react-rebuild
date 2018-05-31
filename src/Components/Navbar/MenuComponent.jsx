import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

MenuComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  handleToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};


export default function MenuComponent({ children, handleToggle, isOpen }) {
  return (

    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={handleToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {children}
        </Nav>
      </Collapse>
    </Navbar>

  );
}

import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem,
  NavLink,
} from 'reactstrap';

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function MenuItem({ to, name }) {
  return (
    <NavItem>
      <NavLink href={to}>{name}</NavLink>
    </NavItem>
  );
}

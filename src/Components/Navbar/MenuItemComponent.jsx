import React from 'react';
import PropTypes from 'prop-types';
import {
  NavItem,
  NavLink,
} from 'reactstrap';

MenuItem.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

MenuItem.defaultProps = {
  id: '',
  disabled: false,
};

export default function MenuItem({
  id, to, name, disabled,
}) {
  return (
    <NavItem>
      <NavLink id={id} className={disabled ? 'disabled-link' : ''} disabled={disabled} href={to}>{name}</NavLink>
    </NavItem>
  );
}

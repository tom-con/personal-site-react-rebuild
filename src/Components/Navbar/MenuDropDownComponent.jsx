import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavLink } from 'reactstrap';

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  right: PropTypes.bool,
};

Dropdown.defaultProps = {
  right: true,
};

export default function Dropdown({
  name, items, right,
}) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {name}
      </DropdownToggle>
      <DropdownMenu right={right} >
        {items.map(item => (
          <DropdownItem key={item.name}>
            <NavLink href={item.to}>
              {item.name}
            </NavLink>
          </DropdownItem>
      ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

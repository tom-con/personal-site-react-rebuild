import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavLink } from 'reactstrap';

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

Dropdown.defaultProps = {
  right: true,
  left: false,
};

export default function Dropdown({
  name, items, right, left,
}) {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {name}
      </DropdownToggle>
      <DropdownMenu right={right} left={left} >
        {items.map(item => (
          <DropdownItem>
            <NavLink href={item.to}>
              {item.name}
            </NavLink>
          </DropdownItem>
      ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

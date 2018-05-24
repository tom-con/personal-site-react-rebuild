import React from 'react';

import Menu from './MenuComponent';
import Item from './MenuItemComponent';
import Dropdown from './MenuDropDownComponent';


export default function MenuContainer() {
  return (
    <Menu>
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

import React, { Component } from 'react'

import Menu from './MenuComponent'
import MenuItem from './MenuItemComponent'


class MenuContainer extends Component {
    render(){
        return (
            <Menu>
                <MenuItem 
                    name="Home"
                    to="/"
                />
            </Menu>
        )
    }
}

export default MenuContainer
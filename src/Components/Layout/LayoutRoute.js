import React from 'react';
import { Route } from 'react-router-dom'
import Menu from '../Navbar/MenuContainer'

const LayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <div>
                <Menu />
                <Component {...matchProps} />
            </div>
        )}/>
    )
}

export default LayoutRoute
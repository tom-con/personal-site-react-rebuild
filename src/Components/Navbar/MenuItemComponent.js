import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({to, name, isDropdown, dropdownLinks}) => {
    if(!isDropdown)
        return (
            <li className="active">
                <Link to={to}>
                    {name}
                </Link>
            </li>
        )
    else
        return (
            <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {name} 
                <b className="caret" />
            </a>
            <ul className="dropdown-menu">
                {dropdownLinks.map(sublink => (
                    <li>
                        <Link to={sublink.to}>{sublink.name}</Link>
                    </li>
                ))}
            </ul>
        </li>
        )
}

export default MenuItem
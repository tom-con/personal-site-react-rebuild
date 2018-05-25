import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../Navbar/MenuContainer';
import Header from '../Header/HeaderComponent';

LayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default function LayoutRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <header id="header">
            <Header />
            <Menu />
          </header>
          <Component {...matchProps} />
        </div>
        )}
    />
  );
}

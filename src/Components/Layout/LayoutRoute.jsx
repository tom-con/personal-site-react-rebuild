import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../Navbar/MenuContainer';
import Header from '../Header/HeaderComponent';

LayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

LayoutRoute.defaultProps = {
  classes: '',
};

export default function LayoutRoute({ component: Component, classes, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <body className={classes}>
          <div>
            <header id="header">
              <Header />
              <Menu />
            </header>
            <Component {...matchProps} />
          </div>
        </body>
        )}
    />
  );
}

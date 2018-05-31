import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../Navbar/MenuContainer';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

LayoutRoute.propTypes = {
  component: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

LayoutRoute.defaultProps = {
  classes: '',
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
          <Footer />
        </div>
        )}
    />
  );
}

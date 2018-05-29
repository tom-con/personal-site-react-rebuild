import React from 'react';
import PropTypes from 'prop-types';

LandingComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};


export default function LandingComponent({ children }) {
  return (

    <main id="main">
      <div className="container">
        {children}
      </div>
    </main>

  );
}

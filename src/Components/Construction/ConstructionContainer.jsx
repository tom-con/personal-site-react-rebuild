import React from 'react';

export default function ConstructionContainer() {
  return (
    <main id="main">
      <div className="container">
        <div style={{ height: '50px' }} />
        <div className="row align-items-center">
          <div className="col-2" />
          <div className="col-2">
            <i className="fa fa-cogs fa-5x" />
          </div>
          <div className="col-8">
            <h2>
            Woah! Looks like this page is under construction at the moment!
            </h2>
            <h4>
            Please check back soon (~6/10/18) for updates. :)
            </h4>
          </div>
        </div>
        <div style={{ height: '50px' }} />
      </div>
    </main>
  );
}

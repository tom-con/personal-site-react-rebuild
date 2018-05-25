import React from 'react';


export default function Header() {
  return (
    <div id="head" className="parallax" parallax-speed="2">
      <h1 id="logo" className="text-center">
        <img className="img-circle" src="assets/images/guy.jpg" alt="" />
        <span className="title">Tom Conchie</span>
        <span className="tagline">A mystery person<br />
          {/* <a href="">anthony.russel42@example.com</a> */}
        </span>
      </h1>
    </div>
  );
}

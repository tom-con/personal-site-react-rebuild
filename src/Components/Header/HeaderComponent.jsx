import React from 'react';
import { Parallax } from 'react-parallax';
import me from '../../img/me.jpeg';
import everest from '../../img/everest.jpg';

export default function Header() {
  return (
    <div id="head">
      <Parallax
        bgImage={everest}
        bgImageAlt="A picute of Mt. Everest by Tom Conchie 2015."
        strength={800}
        bgStyle={{
          backgroundColor: '#f4f4f4',
          backgroundPosition: 'top center',
        }}
        bgWidth="100%"
        bgHeight="auto"
      >
        <div style={{ height: '200px' }} />
        <h1 id="logo" className="text-center">
          <img className="img-circle" src={me} alt="Tom Conchie" />
          <span className="title">Tom Conchie</span>
          <span className="tagline">Software Engineer<br />
            <a href="mailto:tconchie@gmail.com">tconchie@gmail.com</a>
          </span>
          <p className="icon-container text-center">
            <a className="icon" href="https://www.github.com/tom-con"><i className="fa fa-github-square fa-2" /></a>
            <a className="icon" href="https://www.linkedin.com/in/tomconchie"><i className="fa fa-linkedin-square fa-2" /></a>
            <a className="icon" href="https://www.facebook.com/tconchie"><i className="fa fa-facebook-official fa-2" /></a>
            <a className="icon" href="https://www.flickr.com/photos/tconchie/"><i className="fa fa-flickr fa-2" /></a>
            <a className="icon" href="https://www.twitter.com/javascirpt/"><i className="fa fa-twitter-square fa-2" /></a>
          </p>
        </h1>
      </Parallax>
    </div>
  );
}

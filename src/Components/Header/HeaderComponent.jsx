import React from 'react';
import { Parallax, Background } from 'react-parallax';
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
      >
        <div style={{ height: '200px' }} />
        <h1 id="logo" className="text-center">
          <img className="img-circle" src={me} alt="Tom Conchie" />
          <span className="title">Tom Conchie</span>
          <span className="tagline">Software Engineer<br />
            <a href="mailto:tconchie@gmail.com">tconchie@gmail.com</a>
          </span>
        </h1>
      </Parallax>
    </div>
  );
}

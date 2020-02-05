import React from 'react';
import imgReact from '../../assets/img/react.png';

export default function Title() {
  return (
    <section id="title" data-background-color="#2a2c2e">
      <img data-src={imgReact} alt="React" />
      <h2>
        <span className="white">
          React <small>16.12.0</small>
        </span>
      </h2>
      <h3>
        <span className="white">
          A <strong>JavaScript</strong> Library For Building UI
        </span>
      </h3>
    </section>
  );
}

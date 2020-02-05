import React from 'react';
import imgReact from '../../assets/img/react.png';

export default function Main() {
  return (
    <section id="react" data-background-color="#2a2c2e">
      <img data-src={imgReact} alt="React" />
      <h2>
        <span className="white">React</span>
      </h2>
    </section>
  );
}

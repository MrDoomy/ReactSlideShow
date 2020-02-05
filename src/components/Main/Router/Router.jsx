import React from 'react';
import Explanation from './Explanation';
import Mapping from './Mapping';
import Implementation from './Implementation';
import Nav from './Nav';
import Hooks from './Hooks';
import imgReactRouter from '../../../assets/img/react-router.png';

export default function Router() {
  return (
    <section>
      <section id="router" data-background-color="#2a2c2e">
        <img data-src={imgReactRouter} alt="React Router" />
        <h2>
          <span className="white">React Router</span>
        </h2>
      </section>
      <Explanation />
      <Mapping />
      <Implementation />
      <Nav />
      <Hooks />
    </section>
  );
}

import React from 'react';
import Cycle from './Cycle';
import UseCase from './UseCase';

export default function LifeCycle() {
  return (
    <section>
      <section id="lifecycle" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Cycle De Vie</span>
        </h1>
      </section>
      <Cycle />
      <UseCase />
    </section>
  );
}

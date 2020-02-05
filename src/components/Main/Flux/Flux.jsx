import React from 'react';
import Concept from './Concept';
import Philosophy from './Philosophy';
import Without from './Without';
import With from './With';

export default function Flux() {
  return (
    <section>
      <section id="flux" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Flux</span>
        </h1>
      </section>
      <Concept />
      <Philosophy />
      <Without />
      <With />
    </section>
  );
}

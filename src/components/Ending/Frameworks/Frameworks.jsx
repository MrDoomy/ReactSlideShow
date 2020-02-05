import React from 'react';
import Angular from './Angular';
import Vue from './Vue';
import Svelte from './Svelte';

export default function Frameworks() {
  return (
    <section>
      <section id="frameworks" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Frameworks</span>
        </h1>
      </section>
      <Angular />
      <Vue />
      <Svelte />
    </section>
  );
}

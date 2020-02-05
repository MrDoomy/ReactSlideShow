import React from 'react';
import Opening from './Opening';
import Topic from './Topic';
import Ending from './Ending';

export default function Summary() {
  return (
    <section>
      <section id="summary" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Sommaire</span>
        </h1>
      </section>
      <Opening />
      <Topic />
      <Ending />
    </section>
  );
}

import React from 'react';
import State from './State';
import Props from './Props';
import Typing from './Typing';

export default function StateProps() {
  return (
    <section>
      <section id="state-props" data-background-color="#2a2c2e">
        <h1>
          <span className="white">State & Props</span>
        </h1>
        <h3>
          <em>
            <span className="white">
              Gérer les données et les exposer dans le <strong>DOM</strong>
            </span>
          </em>
        </h3>
      </section>
      <State />
      <Props />
      <Typing />
    </section>
  );
}

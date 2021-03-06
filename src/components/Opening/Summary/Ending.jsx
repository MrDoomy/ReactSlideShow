import React from 'react';

const strike = {
  textDecoration: 'line-through'
};

export default function Ending() {
  return (
    <section id="ending">
      <h2>Vue d'Ensemble</h2>
      <ol>
        <li>
          <a href="#/frameworks">Frameworks</a>
        </li>
        <li>
          <a href="#/infography">Infographie</a>
        </li>
        <li>
          <a href="#/dev-way">
            The Way Of <span style={strike}>Jedi</span> Dev
          </a>
        </li>
        <li>
          <a href="#/appendix">Annexes</a>
        </li>
      </ol>
    </section>
  );
}

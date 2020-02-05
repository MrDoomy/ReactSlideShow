import React from 'react';
import imgJest from '../../../assets/img/jest.png';
import imgTestingLib from '../../../assets/img/testing-lib.png';

const strike = {
  textDecoration: 'line-through'
};

export default function Testing() {
  return (
    <section id="testing">
      <img data-src={imgJest} alt="Jest" />
      <img data-src={imgTestingLib} alt="Testing Library" />
      <h2>Tests Unitaires</h2>
      <p>
        La base de la programmation
        <br />
        Technique liée à l'approche <strong>Agile</strong>
        <br />
        Tester les méthodes, les composants, les services...
        <br />
        Gagner du temps dans vos développements
      </p>
      <p>
        <span className="grey" style={strike}>
          <em>Tester c'est douter !</em>
        </span>
      </p>
    </section>
  );
}

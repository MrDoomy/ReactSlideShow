import React from 'react';
import imgYarn from '../../../assets/img/yarn.png';

export default function DepManager() {
  return (
    <section id="dep-manager">
      <img data-src={imgYarn} alt="Yarn" />
      <h2>Yarn</h2>
      <p>
        Alternative à <strong>NPM</strong>
        <br />
        Gérer vos dépendances
        <br />
        Sécuriser vos versions
        <br />
        Récupération des librairies <strong>JavaScript</strong>
        <br />
        Amélioration des performances du projet
      </p>
    </section>
  );
}

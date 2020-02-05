import React from 'react';
import imgVue from '../../../assets/img/vue.png';

export default function Vue() {
  return (
    <section id="vue">
      <img data-src={imgVue} alt="Vue" />
      <h2>Vue</h2>
      <p>
        Développé depuis 2014 par <strong>Evan You</strong>
        <br />
        Facilement intégrable aux projets existants
        <br />
        Liaison de données bi-directionnelle
        <br />
        Idéal pour les applications à grande échelle
        <br />
        Outil <strong>CLI</strong> très performant
        <br />
        Framework rapide, léger et fiable pour un code stable
      </p>
    </section>
  );
}

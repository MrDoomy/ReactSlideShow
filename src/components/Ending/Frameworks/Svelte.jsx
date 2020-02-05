import React from 'react';
import imgSvelte from '../../../assets/img/svelte.png';

export default function Svelte() {
  return (
    <section id="svelte">
      <img data-src={imgSvelte} alt="Svelte" />
      <h2>Svelte</h2>
      <p>
        Propulsé par <strong>Rich Harres</strong> dès 2018
        <br />
        Compilateur <strong>VanillaJS</strong> ultra-performant
        <br />
        Utilisation du DOM à l'instar du <strong>Virtual DOM</strong>
        <br />
        Dédié à l'IoT, les <em>wearables</em>, le Web embarqué, etc...
        <br />
        <strong>Sapper</strong> pour le rendu côté serveur{' '}
        <small>
          (<em>code-splitting</em>)
        </small>
        <br />
        La 3<small>ème</small> version <small>(2019)</small> prône la "vraie" réactivité
      </p>
    </section>
  );
}

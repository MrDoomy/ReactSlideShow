import React from 'react';

export default function Intro() {
  return (
    <section id="intro">
      <h1>Introduction</h1>
      <p>
        Créé en 2013 par <strong>Facebook</strong>
        <br />
        Utilisation massive du langage JSX
        <br />
        Idéal pour les projets <em>Front-End</em> volumineux
        <br />
        Implémentation de l'architecture <strong>Flux</strong>
        <br />
        Initialement publié sous licence BSD
        <br />
        <strong>React Native</strong> pour développer sur mobile
        <br />
        Utilisé par <span className="red">Netflix</span>,{' '}
        <span className="black">Deezer</span>,{' '}
        <span className="green">Spotify</span>,{' '}
        <span className="brown">Instagram</span>,{' '}
        <span className="orange">SoundCloud</span>...
      </p>
    </section>
  );
}

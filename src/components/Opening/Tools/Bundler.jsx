import React from 'react';
import imgWebPack from '../../../assets/img/webpack.png';

const strike = {
  textDecoration: 'line-through'
};

export default function Bundler() {
  return (
    <section id="bundler">
      <img data-src={imgWebPack} alt="WebPack" />
      <h2>Bundler</h2>
      <p>
        Fonctionnement par modules
        <br />
        Intéropérabilité des fichiers
        <br />
        Appel{' '}
        <span className="grey" style={strike}>
          de fichiers
        </span>{' '}
        de modules
        <br />
        Découpage par responsabilité
        <br />
        Fini les casses têtes liés aux ressources{' '}
        <small>
          (<code>.js</code>, <code>.json</code>, <code>.jsx</code>)
        </small>
      </p>
    </section>
  );
}

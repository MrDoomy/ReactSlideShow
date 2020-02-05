import React from 'react';
import imgEsLint from '../../../assets/img/eslint.png';

export default function Linter() {
  return (
    <section id="linter">
      <img data-src={imgEsLint} alt="ESLint" />
      <h2>ESLint</h2>
      <p>
        <span className="clearfix">
          Optimisation de{' '}
          <span className="deep-purple">
            <code>code</code>
          </span>
        </span>
        <br />
        Analyse statique du{' '}
        <span className="deep-purple">
          <code>code</code>
        </span>{' '}
        source
        <br />
        Contrôle l'écriture du{' '}
        <span className="deep-purple">
          <code>code</code>
        </span>
        <strong> JavaScript</strong>
        <br />
        Basé sur la convention de{' '}
        <span className="deep-purple">
          <code>code</code>
        </span>{' '}
        d'EcmaScript
      </p>
    </section>
  );
}

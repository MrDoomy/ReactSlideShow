import React from 'react';
import imgTypeScript from '../../assets/img/typescript.png';

export default function TypeScript() {
  return (
    <section id="typescript">
      <img data-src={imgTypeScript} alt="TypeScript" />
      <h2>TypeScript</h2>
      <p>
        Créé par <strong>Microsoft</strong> en 2012
        <br />
        Langage de programmation libre et <em>Open Source</em>
        <br />
        Sur-ensemble <strong>JavaScript</strong> fortement typé
        <br />
        Support des spécifications <strong>EcmaScript</strong>
        <br />
        Multiparadigme{' '}
        <small>
          (<em>Client-Side</em> / <em>Server-Side</em>)
        </small>
        <br />
        Version 3 depuis Juillet 2018
      </p>
    </section>
  );
}

import React from 'react';
import imgNode from '../../../assets/img/node.png';
import imgNpm from '../../../assets/img/npm.png';

export default function Engine() {
  return (
    <section id="engine">
      <img data-src={imgNode} alt="NodeJS" />
      <img data-src={imgNpm} alt="NPM" />
      <p>
        1<small>er</small> version en 2009
        <br />
        Environnement <strong>JavaScript</strong>
        <br />
        Basé sur le moteur <strong>Chrome V8</strong>
        <br />
        Utilisé en tant que plateforme logicielle
        <br />
        Contient nativement un serveur Web
        <br />
        Dernière version <strong>LTS</strong> : 12.14.x
        <br />
        Gestionnaire de paquets <small>(officiel)</small>
      </p>
    </section>
  );
}

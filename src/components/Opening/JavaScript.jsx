import React from 'react';
import imgJavaScript from '../../assets/img/javascript.png';

export default function JavaScript() {
  return (
    <section id="javascript">
      <img data-src={imgJavaScript} alt="JavaScript" />
      <h2>JavaScript</h2>
      <p>
        Créé part <strong>Brendan Eich</strong> en 1995
        <br />
        Alliance entre <strong>Sun</strong> et <strong>Netscape</strong>
        <br />
        Langage faiblemment typé
        <br />
        Programmation fonctionnelle
        <br />
        Volonté d'un Web plus dynamique
        <br />
        Version 10 depuis Juin 2019
      </p>
    </section>
  );
}

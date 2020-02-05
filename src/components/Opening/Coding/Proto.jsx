import React from 'react';

const CODE = `
  /* Constructeur */
  var Object = function(one, two) {

    /* Super */
    Parent.call(this, one, two);

    /* Attributs */
    this.one = one;
    this.two = two;
  };

  /* Methode */
  Object.prototype.diff = function() {
    return (this.one - this.two);
  };

  var instance = new Object(6, 4);

  console.log(instance.diff()); // Affiche '2' dans la console
  `;

export default function Proto() {
  return (
    <section id="proto">
      <h2>Prototype</h2>
      <p>
        Manière de faire de l'héritage en <strong>Javascript</strong>
        <br />
        C'est l'équivalent d'une classe en Java
        <br />
        Une sorte de patron qu'un objet peut utiliser
        <br />
        Complexe mais puissant dans son usage
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

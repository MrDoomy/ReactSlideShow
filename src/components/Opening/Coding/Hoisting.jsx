import React from 'react';

const SNIPPET_LEFT = `
  'use strict';
  console.log('i:', i);

  var i = 1;
  execute('Hey');

  function execute(message) {
    console.log(message);
  }

  execute('Hey);
  `;

const SNIPPET_RIGHT = `
  // Compile
  var i;
  function execute(message) {
    console.log(message);
  }

  // Execute
  console.log('i:' i);
  i = 1;
  execute('Hey');
  execute('Hey');
  `;

export default function Hoisting() {
  return (
    <section id="hoisting">
      <h2>Fonctionnement</h2>
      <p>
        Le code <strong>JavaScript</strong> mêle à la fois du code exécuté et du code déclaratif
        <br />
        La pile d'exécution <small>(Call Stack)</small> compile le code puis l'exécute
        <br />
        Ainsi, le code <strong>JavaScript</strong> est synchrone
      </p>
      <div className="left">
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

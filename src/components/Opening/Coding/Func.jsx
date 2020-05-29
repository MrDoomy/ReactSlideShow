import React from 'react';

const SNIPPET_LEFT = `
  var tab = [3, 5, 7, 9];

  /* Assignation */
  var isSumEven = function(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }

    return sum % 2 === 0;
  }

  var result = isSumEven(tab);

  /* Déclaration */
  function log(obj) {
    console.log('Result: ' + obj);
  };

  log(result); /* Result: true */
  `;

const SNIPPET_RIGHT = `
  const tab = [3, 5, 7, 9];

  /* Assignation */
  const isSumEven = array => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum % 2 === 0;
  };

  const result = isSumEven(tab);

  /* Déclaration */
  function log(obj) {
    console.log(\`Result: \${obj}\`);
  };

  log(tab); /* Result: true */
  `;

export default function Func() {
  return (
    <section id="func">
      <h2>Fonctions</h2>
      <p>
        Voici comment déclarer une fonction en <strong>JavaScript</strong> :
      </p>
      <div className="left">
        <h3>ES5</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <h3>ES6+</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

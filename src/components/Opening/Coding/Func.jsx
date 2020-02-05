import React from 'react';

const CODE_LEFT = `
  var numeric = 7;
  var tab = [3, '5', 7];

  /* Assignation */
  var remove = function(array, value) {
    var size = array.length;

    for (var i = size - 1; i >= 0; i--) {
      if (array[i] === value) {
        var index = array.indexOf(value);
        array.splice(index, 1);
      }
    }
  };

  remove(tab, numeric);

  /* Déclaration */
  function log(obj) {
    console.log('Log : ' + obj);
  };

  log(tab); /* Log : [3, '5'] */
  `;

const CODE_RIGHT = `
  const numeric = 7;
  let tab = [3, '5', 7];

  /* Assignation */
  const remove = (array, value) => {
    let size = array.length;

    for (let i = size - 1; i >= 0; i--) {
      if (array[i] === value) {
        const index = array.indexOf(value);
        array.splice(index, 1);
      }
    }
  };

  remove(tab, numeric);

  /* Déclaration */
  function log(obj) {
    console.log(\`Log : \${obj}\`);
  };

  log(tab); /* Log : [3, '5'] */
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
            {CODE_LEFT}
          </code>
        </pre>
      </div>
      <div className="fragment right">
        <h3>ES6+</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

import React from 'react';

const SNIPPET = `
  let tab = ['Plop', 42, true];
  const another = ['Test', false];

  tab.push(another);

  console.log(tab.length); /* Affiche '4' dans la console */
  console.log(tab[3][0]); /* Affiche 'Test' dans la console */

  tab.length = 2;

  alert(tab); /* Affiche '['Plop', 42]' dans la console */
  `;

export default function Tab() {
  return (
    <section id="tab">
      <h2>Tableaux</h2>
      <p>
        Voici comment déclarer un tableau en <strong>JavaScript</strong> :
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

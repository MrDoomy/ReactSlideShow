import React from 'react';

const SNIPPET_TOP = `
  npm install --save-dev @testing-library/react @testing-library/jest-dom
  `;

const SNIPPET_BOTTOM = `
  import '@testing-library/jest-dom/extend-expect';
  `;

export default function Setup() {
  return (
    <section id="setup">
      <h2>Configuration</h2>
      <p>Récupération des librairies utilitaires :</p>
      <pre>
        <code className="shell" contentEditable suppressContentEditableWarning>
          {SNIPPET_TOP}
        </code>
      </pre>
      <div className="fragment">
        <p>
          Initialisation du fichier <code>setupTests.js</code> :
        </p>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_BOTTOM}
          </code>
        </pre>
      </div>
    </section>
  );
}

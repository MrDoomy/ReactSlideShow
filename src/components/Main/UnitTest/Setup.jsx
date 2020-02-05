import React from 'react';

const CODE_TOP = `
  npm install --save-dev @testing-library/react @testing-library/jest-dom
  `;

const CODE_BOTTOM = `
  import '@testing-library/jest-dom/extend-expect';
  `;

export default function Setup() {
  return (
    <section id="setup">
      <h2>Configuration</h2>
      <p>Récupération des librairies utilitaires :</p>
      <pre>
        <code className="shell" contentEditable suppressContentEditableWarning>
          {CODE_TOP}
        </code>
      </pre>
      <div className="fragment">
        <p>
          Initialisation du fichier <code>setupTests.js</code> :
        </p>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE_BOTTOM}
          </code>
        </pre>
      </div>
    </section>
  );
}

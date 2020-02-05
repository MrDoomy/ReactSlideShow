import React from 'react';

const strike = {
  textDecoration: 'line-through'
};

const CODE = `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>

      <!-- This Is Where We'll Mount Our App -->
      <div id="root"></div>
    </body>
  </html>
  `;

export default function Mounting() {
  return (
    <section id="mounting">
      <h1>Initialisation</h1>
      <ul>
        <li>
          <span className="grey" style={strike}>
            1<small>er</small> Étape : Écrire son composant
          </span>
        </li>
        <li>
          2<small>ème</small> Étape : Monter son composant dans le DOM
        </li>
      </ul>
      <div>
        <h3>HTML</h3>
        <pre>
          <code className="html" contentEditable suppressContentEditableWarning>
            {CODE}
          </code>
        </pre>
      </div>
    </section>
  );
}

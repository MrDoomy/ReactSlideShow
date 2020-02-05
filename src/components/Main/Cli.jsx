import React from 'react';

const CODE = `
  npx create-react-app my-project
  `;

export default function Cli() {
  return (
    <section id="cli">
      <h1>Command Line Interface</h1>
      <p>
        L'indispensable <code>create-react-app</code>
        <br />
        Outil CLI <strong>React</strong> <small>(officiel)</small>
        <br />
        Projet prêt à l'emploi grâce à <code>react-scripts</code>
        <br />
        Support de <strong>TypeScript</strong> et de <strong>SASS</strong> / <strong>SCSS</strong>
        <br />
        Autorise l'éjection pour la personnalisation Webpack
      </p>
      <pre>
        <code className="shell">{CODE}</code>
      </pre>
    </section>
  );
}

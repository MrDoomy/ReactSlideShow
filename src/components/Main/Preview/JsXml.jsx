import React from 'react';

const CODE = `
  import React, { Component } from 'react';

  const userName = 'Rick';

  class HelloWorld extends Component {
    render() {
      return (
        <span style={{ color: '#2a2c2e' }}>Hi {userName} !</span>
      );
    }
  }
  `;

export default function JsXml() {
  return (
    <section id="jsx">
      <h1>JSX</h1>
      <p>
        Préférez la syntaxe JSX, exemple avec le fichier{' '}
        <code>HelloWorld.jsx</code> :
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
      <div className="fragment">
        <br />
        <span className="blue-grey">
          <em>Le langage JSX nécessite d'être transpilé</em>
        </span>
      </div>
    </section>
  );
}

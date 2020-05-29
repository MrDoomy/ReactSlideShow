import React from 'react';

const SNIPPET_LEFT = `
  var foo = 1;
    
  function bar() {
    if (!foo) {
      var foo = 10;
    }

    console.log(foo);
  }
    
  bar();
  `;

const SNIPPET_RIGHT = `
  var foo = 1;

  function bar() {
    var foo;

    if (!foo) {
      foo = 10;
    }

    console.log(foo);
  }

  bar(); // 10
  `;

export default function Running() {
  return (
    <section id="running">
      <h2>Interprétation</h2>
      <p>
        Quel est le résultat de cette fonction <strong>JavaScript</strong> :
        <br />
        <span className="orange">
          <code>1</code>
        </span>
        ,{' '}
        <span className="blue">
          <code>10</code>
        </span>
        ,{' '}
        <span className="red">
          <code>undefined</code>
        </span>{' '}
        ou{' '}
        <span className="green">
          <code>ReferenceError</code>
        </span>{' '}
        ?
      </p>
      <div className="left">
        <h3>Pré-Compilation</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <h3>Post-Compilation</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

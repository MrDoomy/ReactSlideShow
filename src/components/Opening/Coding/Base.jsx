import React from 'react';

const CODE_LEFT = `
  var myVar;

  var fourtyTwo = 42;

  var helloWorld = 'Hello World';

  var truthy = true;

  console.log(typeof myVar); // undefined

  alert(helloWorld + ' !'); // Hello World !

  console.log(truthy && 'It Works'); // It Works
  `;

const CODE_RIGHT = `
  let myVar;
  myVar = null;

  const fourtyTwo = 42;

  const helloWorld = 'Hello World';
  helloWorld = 'Hey'; // TypeError !

  const truthy = true;

  alert(\`$\{helloWorld} !\`); // Hello World !

  console.log(truthy && 'It Works'); // It Works
  `;

export default function Base() {
  return (
    <section id="base">
      <h2>Variables</h2>
      <p>
        Les types primitifs en <strong>JavaScript</strong> sont :<br />
        <code>
          <span className="orange">boolean</span>
        </code>
        ,{' '}
        <code>
          <span className="blue">number</span>
        </code>
        ,{' '}
        <code>
          <span className="red">string</span>
        </code>
        ,{' '}
        <code>
          <span className="green">undefined</span>
        </code>{' '}
        et{' '}
        <code>
          <span className="pink">null</span>
        </code>
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

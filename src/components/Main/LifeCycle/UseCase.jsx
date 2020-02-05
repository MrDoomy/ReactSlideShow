import React from 'react';

const CODE_LEFT = `
  import React, { Component } from 'react';

  class HelloWorld extends Component {
    componentDidMount() {
      console.log('Mounted !');

      fetch('/api/hello-world', {
        method: GET
      }).then(response => {
        console.log(response.json());
      });
    }

    render() {
      return (
        {/* ... */}
      );
    }
  }
  `;

const CODE_RIGHT = `
  import React, { useEffect } from 'react';

  function HelloWorld() {
    useEffect(() => {
      console.log('Mounted !');

      fetch('/api/hello-world', {
        method: GET
      }).then(response => {
        console.log(response.json());
      });
    }, []);

    return (
      {/* ... */}
    );
  }
  `;

export default function UseCase() {
  return (
    <section id="use-case">
      <h2>Cas d'Usage</h2>
      <p>Appel d'une API lorsque le composant est monté dans le DOM</p>
      <div className="left">
        <h3>Stateful</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE_LEFT}
          </code>
        </pre>
      </div>
      <div className="fragment right">
        <h3>Stateless</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

import React from 'react';

const SNIPPET_LEFT = `
  class Child extends Component {
    render() {
      return (
        <div>
          <h3>{this.props.label}<h3>
          <span>{this.props.counter}</span>
        </div>
      );
    }
  }

  export default Child;
  `;

const SNIPPET_RIGHT = `
  import Child from './Child';

  class Parent extends Component {
    state = {
      counter: 42
    };

    render() {
      return (
        <Child
          label="Compteur"
          counter={this.state.counter} />
      );
    }
  }
  `;

export default function Props() {
  return (
    <section id="props">
      <h2>Props</h2>
      <p>
        Les propriétés sont immutables
        <br />
        N'importe quelle valeur{' '}
        <small>(listes, objets, fonctions, nombres... )</small>
        <br />
        Données transmises d'un composant parent à un enfant
        <br />
        Passer des propriétés comme des attributs d'un élement HTML
      </p>
      <div className="left">
        <h3>Enfant</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <h3>Parent</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

import React from 'react';

const SNIPPET_LEFT = `
  import Child from './Child';

  class Parent extends Component {
    state = {
      counter: 0
    };

    this.increment = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };

    render() {
      return (
        <Child
          counter={this.state.counter}
          increment={this.increment} />
      );
    }
  }
  `;

const SNIPPET_RIGHT = `
  class Child extends Component {
    render() {
      return (
        <div>
          <h1>{this.props.counter}</h1>
          <button onClick={this.props.increment}>
            +1
          </button>
        </div>
      );
    }
  }

  export default Child;
  `;

export default function Current() {
  return (
    <section id="current">
      <h2>Modèle Courant</h2>
      <p>
        Mise à jour des <code>props</code> d'un composant en passant{' '}
        <small>(implicitement)</small> par le parent
      </p>
      <div className="left">
        <h3>Parent</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <h3>Enfant</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

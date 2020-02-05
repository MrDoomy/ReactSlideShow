import React from 'react';

const CODE = `
  class Counter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0
      };

      this.increment = this.increment.bind(this);
    }

    increment() {
      this.setState({ counter: this.state.counter + 1 });
    }

    render() {
      return (
        <div>
          <span>{this.state.counter}</span>
          <button onClick={this.increment}>+1</button>
        </div>
      );
    }
  }
  `;

export default function State() {
  return (
    <section id="state">
      <h2>State</h2>
      <p>
        L'état est mutable
        <br />
        Données internes au composant
        <br />
        Entièrement géré par le composant lui-même
      </p>
      <div>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE}
          </code>
        </pre>
      </div>
    </section>
  );
}

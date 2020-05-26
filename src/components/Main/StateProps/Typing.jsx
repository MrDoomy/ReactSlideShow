import React from 'react';

const SNIPPET = `
  import { number, func } from 'prop-types';

  class Counter extends Component {
    render() {
      return (
        <div>
          <span>{this.props.counter}</span>
          <button onClick={this.props.increment}>+1</button>
        </div>
      );
    }
  }

  Counter.defaultProps = {
    counter: 0
  };

  Counter.propTypes = {
    counter: number,
    increment: func.isRequired
  };
  `;

export default function Typing() {
  return (
    <section id="typing">
      <h2>Typage</h2>
      <p>
        Définir le type des propriétés avec <code>propTypes</code>
        <br />
        Imposer des valeurs par défaut avec <code>defaultProps</code>
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

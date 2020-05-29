import React from 'react';

const SNIPPET_LEFT = `
  export default class Counter extends Component {
    state = {
      value: 0
    };

    increment = () => {
      this.setState({ value: this.state.value + 1 });
    };

    render() {
      const { value } = this.state;

      return (
        <div>
          <h1>Compteur</h1>
          {this.props.render({
            value,
            increment: this.increment,
            decrement: val => this.setState({
              value: value - val
            })
          })}
        </div>
      );
    }
  }
  `;

const SNIPPET_RIGHT = `
  import Counter from './Counter';

  class ButtonGroup extends Component {
    render() {
      return (
        <Counter render={props => (
          <>
            <button onClick={props.increment}>
              {props.value} +1
            </button>
            <button
              onClick={() => props.decrement(2)}>
              {props.value} -2
            </button>
          </>
        )} />
      );
    }
  }
  `;

export default function RenderProps() {
  return (
    <section id="render-props">
      <h2>Render Props</h2>
      <p>
        Ajouter des propriétés grâce aux <strong>H</strong>igher-
        <strong>O</strong>rder <strong>C</strong>omponents <small>(HOC)</small>
      </p>
      <div className="left">
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="right fragment">
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_RIGHT}
          </code>
        </pre>
      </div>
    </section>
  );
}

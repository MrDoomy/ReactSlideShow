import React from 'react';

const strike = {
  textDecoration: 'line-through'
};

const CODE = `
  import React, { PureComponent } from 'react';

  class PureGreeting extends PureComponent {
    /*
    shouldComponentUpdate(nextProps, nextState) {
      return nextProps !== this.props || nextState !== this.state;
    } 
    */

    render() {
      return (
        <span>Hi {this.props.userName} !</span>
      );
    }
  }
  `;

export default function Pure() {
  return (
    <section id="pure">
      <h1>Pure Components</h1>
      <p>
        Composants qui sont (re)rendus uniquement si leurs <code>props</code> ou <code>state</code> changent
      </p>
      <ol>
        <li>
          <span className="grey" style={strike}>
            Implémenter <code>shouldComponentUpdate</code> dans chaque composant
          </span>
        </li>
        <li>
          Étendre son composant de <strong>React.PureComponent</strong>
        </li>
      </ol>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

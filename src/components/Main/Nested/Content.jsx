import React from 'react';

const SNIPPET_LEFT = `
  import { Child } from './Child';

  class Parent extends Component {
    render() {
      return (
        <Child>
          <span>World</span>
        </Child>
      );
    }
  }
  `;

const SNIPPET_RIGHT = `
  export const Child(props) {
    const { children } = props;

    return (
      <div>
        <h1>Hello</h1>
        {children}
      </div>
    );
  }
  `;

export default function Content() {
  return (
    <section id="children">
      <h1>Imbrication</h1>
      <p>
        <code>this.props.children</code> permet d'accéder aux élements imbriqués
      </p>
      <div className="left">
        <h3>Parent</h3>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_LEFT}
          </code>
        </pre>
      </div>
      <div className="fragment right">
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

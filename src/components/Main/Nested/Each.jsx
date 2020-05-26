import React from 'react';

const SNIPPET = `
  class Listing extends Component {
    render() {
      return (
        <ul>
          {this.props.myList.map((item, idx) => (
            <li key={idx}>{item}</li>
          )}
        </ul>
      );
    }
  }

  Listing.defaultProps = {
    myList: [
      'Awesome',
      'React',
      'Course'
    ]
  };

  export default Listing;
  `;

export default function Each() {
  return (
    <section id="each">
      <h2>For Each</h2>
      <p>Construction dynamique de noeud DOM</p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
      <div className="fragment">
        <br />
        <span className="blue-grey">
          <em>Ne pas oublier d'identifier chaque élément lors d'un rendu dynamique grâce à</em>{' '}
          <strong>key</strong>
        </span>
      </div>
    </section>
  );
}

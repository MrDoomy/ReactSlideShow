import React from 'react';

const CODE = `
  import React from 'react';
  import { useParams, useHistory } from 'react-router-dom';

  export default function Contact(props) {
    const { userName } = useParams();
    const history = useHistory();

    return (
      <div>
        <h1>UserName : {userName}</h1>
        <button onClick={() => history.push('/')}>Go Home</button>
      </div>
    );
  }
  `;

export default function Hooks() {
  return (
    <section id="hooks-return">
      <h1>Hooks</h1>
      <h3>
        <em>Le Retour !</em>
      </h3>
      <p>
        Le <em>routing</em> plus simple grâce aux <code>hooks</code>
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

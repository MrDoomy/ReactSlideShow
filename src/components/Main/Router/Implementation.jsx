import React from 'react';

const SNIPPET_TOP = `
  import React from 'react';
  import NavBar from './NavBar';
  import Routing from './Routing';

  export default function App() {
    return (
      <>
        <NavBar />
        <Routing />
      </>
    );
  }
  `;

const SNIPPET_BOTTOM = `
  import React from 'react';
  import { render } from 'react-dom';
  import { BrowserRouter as Router } from 'react-router-dom';
  import App from './App';

  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
  `;

export default function Implementation() {
  return (
    <section id="implementation">
      <h2>Intégration</h2>
      <p>
        Rendu du composant servant de <strong>router</strong> à partir du composant principal
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET_TOP}
        </code>
      </pre>
      <div className="fragment">
        <p>
          Activation de la navigation par <strong>routes</strong> dans le point d'entrée de l'application
        </p>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET_BOTTOM}
          </code>
        </pre>
      </div>
    </section>
  );
}

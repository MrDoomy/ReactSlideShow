import React from 'react';

const CODE = `
  import React, { Suspense } from 'react';
  import { Switch, Route } from 'react-router-dom';
  import Home from './Home';
  import Login from './Login';

  // Code Splitting
  const Contact = React.lazy(() => import('./Contact'));

  function Routing() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact/:userName" render={({ match }) => (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact userName={match.params.userName} />
          </div>
        )} />
        <Route component={Home} />
      </Switch>
    );
  }

  export default Routing;
  `;

export default function Mapping() {
  return (
    <section id="mapping">
      <h2>Mapping</h2>
      <p>
        Définition des chemins pour chaques composants de l'application
        <br />
        <code>Suspense</code> permet de gérer le découpage dynamique
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

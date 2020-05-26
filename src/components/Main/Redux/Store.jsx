import React from 'react';

const SNIPPET = `
  import { combineReducers, createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import tasks from './tasks';
  
  const reducers = combineReducers({
    tasks
  });

  const store = createStore(reducers, applyMiddleware(thunk));

  export default store;
  `;

export default function Store() {
  return (
    <section id="store">
      <h2>Store</h2>
      <p>
        Ne pas oublier d'exposer ses <code>reducer</code>s afin d'y avoir accès dans votre application
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

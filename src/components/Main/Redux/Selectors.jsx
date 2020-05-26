import React from 'react';

const SNIPPET = `
  export const getTasks = state => state.tasks || [];

  export const getTaskById = id => state => getTasks(state).find(task => task.id === id);
  `;

export default function Selectors() {
  return (
    <section id="selectors">
      <h2>Selectors</h2>
      <p>
        Les <code>selectors</code> permettent de récupérer l'état d'une donnée dans le{' '}
        <strong>store</strong>
        <br />
        Il est possible de passer des paramètres aux <code>selectors</code>
      </p>
      <div>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {SNIPPET}
          </code>
        </pre>
      </div>
    </section>
  );
}

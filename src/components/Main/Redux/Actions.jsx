import React from 'react';

const SNIPPET = `
  // Constants
  export const CREATE_TASK = 'TASKS/CREATE_TASK';
  export const COMPLETE_TASK = 'TASKS/COMPLETE_TASK';
  export const CLEAR_TASK = 'TASKS/CLEAR_TASK';

  const createTask = task => ({ type: CREATE_TASK, payload: task });
  const completeTask = id => ({ type: COMPLETE_TASK, payload: id });
  const clearTask = id => ({ type: CLEAR_TASK, payload: id });
  `;

export default function Actions() {
  return (
    <section id="actions">
      <h2>Actions</h2>
      <p>
        Mise à jour du <strong>store</strong> uniquement via les{' '}
        <code>reducer</code>s appelés par des <em>actions</em>
        <br />
        La comparaison de l'état permet d'identifier le changement
        <br />
        Le <em>type</em> est la référence utilisée par le <code>reducer</code>
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

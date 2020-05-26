import React from 'react';

const SNIPPET = `
  import * as Actions from '../actions';
  import reducer from '../reducer';
  import * as Selectors from '../selectors';

  describe('Tasks', () => {
    it("Should 'createTask' Returns 'type' & 'payload'", () => {
      const task = { id: 42, label: 'Lorem Ipsum' };
      expect(Actions.createTask(task)).toEqual({ type: 'TASKS/CREATE_TASK', payload: task });
    });

    it("Should 'TASKS/CREATE_TASK' Case Returns State", () => {
      const initialState = [];
      const task = { id: 42, label: 'Lorem Ipsum' };
      expect(reducer(undefined, { type: 'TASKS/CREATE_TASK', payload: task })).toEqual([
        ...initialState,
        task
      ]);
    });

    it("Should 'getTasks' Returns State", () => {
      const state = { tasks: [{ id: 42, label: 'Lorem Ipsum' }] };
      expect(Selectors.getTasks(state)).toHaveLength(1);
    });
  });
  `;

export default function DescribeStore() {
  return (
    <section id="describe-store">
      <h2>
        Tester Avec <strong>Jest</strong>
      </h2>
      <p>
        Création d'une suite de tests unitaires <code>tasks.spec.js</code> :
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

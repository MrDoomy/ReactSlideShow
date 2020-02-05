import React from 'react';

const CODE = `
  import React from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { clearTask } from './actions';
  import { getTaskById } from './selectors';

  export default function ToDo(props) {
    const dispatch = useDispatch();
    const task = useSelector(getTaskById(42));

    const removeTask = id => {
      dispatch(clearTask(id));
    };

    return (
      <div>
        <h2>{task.label}</h2>
        <button onClick={() => removeTask(task.id)}>
          Remove
        </button>
      </div>
    );
  }
  `;

export default function Hooks() {
  return (
    <section id="hooks-revenge">
      <h1>Hooks</h1>
      <h3>
        <em>La Revanche !</em>
      </h3>
      <p>
        Le <em>state management</em> vraiment plus simple grâce aux...{' '}
        <code>hooks</code>
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

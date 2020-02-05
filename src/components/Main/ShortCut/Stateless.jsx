import React from 'react';

const CODE = `
  import { arrayOf, string, func } from 'prop-types';

  const marginAndPadding = {
    marginTop: '20px',
    paddingLeft: '10px'
  };

  const ToDo = ({ tasks, randomTask }) => (
    <div className="stateless">
      <ul>
        {tasks.map((task, idx) => <li key={idx}>{task}</li>)}
      </ul>
      <button style={marginAndPadding} onClick={randomTask}>
        Add Random Task
      </button>
    </div>
  );

  HelloWorld.defaultProps = {
    tasks: []
  };

  HelloWorld.propTypes = {
    tasks: arrayOf(string),
    randomTask: func.isRequired
  };

  export default HelloWorld;
  `;

export default function Stateless() {
  return (
    <section id="stateless">
      <h1>Syntaxe Stateless</h1>
      <p>
        Les composants n'incluant que la fonction{' '}
        <code>render()</code> peuvent s'écrirent autrement
      </p>
      <div>
        <pre>
          <code className="javascript" contentEditable suppressContentEditableWarning>
            {CODE}
          </code>
        </pre>
      </div>
    </section>
  );
}

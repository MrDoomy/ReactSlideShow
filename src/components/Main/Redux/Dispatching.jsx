import React from 'react';

const SNIPPET = `
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { completeTask } from './actions';

  class ToDo extends Component {
    updateTask = id => {
      this.props.completeTask(id);
    };

    render() {
      return (
        <ul>
          {this.props.tasks.map((task, idx) => (
            <li key={idx}>
              {task.label}
              <button onClick={() => this.updateTask(task.id)}>Update</button>
            </li>
          ))}
        </ul>
      );
    }
  }

  const mapStateToProps = state => ({
    tasks: state.tasks
  });

  const mapDispatchToProps = dispatch => ({
    completeTask: id => dispatch(completeTask(id))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
  `;

export default function Dispatching() {
  return (
    <section id="dispatching">
      <h2>Utilisation</h2>
      <p>
        <strong>React Redux</strong> permet de se connecter au{' '}
        <strong>store</strong> dans un composant
        <br />
        Cette connexion est indispensable pour pouvoir <em>dispatch</em>er des{' '}
        <em>actions</em>
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

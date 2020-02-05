import React from 'react';

const CODE = `
  import React from 'react';
  import { render } from 'react-dom';
  import { Provider } from 'react-redux';
  import App from './components/App';
  import store from './redux/store';

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  `;

export default function Initialize() {
  return (
    <section id="initialize">
      <h2>Initialisation</h2>
      <p>
        Chargement du <strong>store</strong> dans le point d'entrée de notre application :{' '}
        <code>index.js</code>
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {CODE}
        </code>
      </pre>
    </section>
  );
}

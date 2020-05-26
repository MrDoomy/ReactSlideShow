import React from 'react';

const SNIPPET = `
  import React, { useState, useEffect } from 'react';

  function Counter(props) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      console.log('Mounted !');
    }, []);

    return (
      <div>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  }

  export default Counter;
  `;

export default function Hooks() {
  return (
    <section id="hooks">
      <h1>Hooks</h1>
      <p>Ajouter de la logique à un composant Stateless</p>
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

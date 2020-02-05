import React from 'react';
import marked from 'marked';

const DEMO = `
  # Demo 2.0

  ## Counter
  
  Add 1 / Del 1 / Reset
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-ii-qd1mk)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

export default function SecondDemo() {
  return (
    <section id="second-demo">
      <div dangerouslySetInnerHTML={{ __html: marked(DEMO) }} />
    </section>
  );
}

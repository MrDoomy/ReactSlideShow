import React from 'react';
import marked from 'marked';

const DEMO = `
  # Demo 4.0

  ## Counter
  
  State Management
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-iv-8lmie)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

export default function FourthDemo() {
  return (
    <section id="fourth-demo">
      <div dangerouslySetInnerHTML={{ __html: marked(DEMO) }} />
    </section>
  );
}

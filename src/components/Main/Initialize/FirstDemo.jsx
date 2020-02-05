import React from 'react';
import marked from 'marked';

const DEMO = `
  # Demo 1.0

  ## Counter
  
  Hello World
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-i-5e7ic)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

export default function FirstDemo() {
  return (
    <section id="first-demo">
      <div dangerouslySetInnerHTML={{ __html: marked(DEMO) }} />
    </section>
  );
}

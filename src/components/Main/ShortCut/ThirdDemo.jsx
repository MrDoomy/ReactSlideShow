import React from 'react';
import marked from 'marked';

const DEMO = `
  # Demo 3.0

  ## Counter
  
  Components
  
  ### Code SandBox

  [https://codesandbox.io/](https://codesandbox.io/s/demo-iii-xxrcu)

  _App 4 ConfJS Made With **React** & &lt;3_
`;

export default function ThirdDemo() {
  return (
    <section id="third-demo">
      <div dangerouslySetInnerHTML={{ __html: marked(DEMO) }} />
    </section>
  );
}

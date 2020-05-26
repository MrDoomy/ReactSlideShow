import React from 'react';

const SNIPPET = `
  import React from 'react';
  import { render, fireEvent } from '@testing-library/react';
  import App from '../App';

  describe('<App />', () => {
    it('Should Component Renders Itself', () => {
      const { container } = render(<App />);
      expect(container).toBeDefined();
    });

    it('Should SnapShot Be Stabilised', () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });

    it('Should Render Contains Text', () => {
      const { queryByText } = render(<App content="Hello World" />);
      expect(queryByText('Hello World')).toBeInTheDocument(); // Enhanced API
    });

    it('Should Click Trigger Works Well', () => {
      const mockedClick = jest.fn();
      const { getByRole } = render(<App handleClick={mockedClick} />);
      fireEvent.click(getByRole('button'));
      expect(mockedClick).toHaveBeenCalled();
    });
  });
  `;

export default function DescribeComponent() {
  return (
    <section id="describe-component">
      <h2>
        Tester Avec <strong>Testing Library</strong>
      </h2>
      <p>
        Création d'une suite de tests unitaires <code>App.spec.js</code> :
      </p>
      <pre>
        <code className="javascript" contentEditable suppressContentEditableWarning>
          {SNIPPET}
        </code>
      </pre>
    </section>
  );
}

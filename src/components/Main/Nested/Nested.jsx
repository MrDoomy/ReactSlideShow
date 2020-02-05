import React from 'react';
import { bool } from 'prop-types';
import Content from './Content';
import Each from './Each';
import SecondDemo from './SecondDemo';

function Nested({ hidden }) {
  return (
    <section>
      <Content />
      <Each />
      {!hidden && <SecondDemo />}
    </section>
  );
}

Nested.defaultProps = {
  hidden: false
};

Nested.propTypes = {
  hidden: bool
};

export default Nested;

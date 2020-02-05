import React from 'react';
import { bool } from 'prop-types';
import Stateless from './Stateless';
import Hooks from './Hooks';
import ThirdDemo from './ThirdDemo';

function ShortCut({ hidden }) {
  return (
    <section>
      <Stateless />
      <Hooks />
      {!hidden && <ThirdDemo />}
    </section>
  );
}

ShortCut.defaultProps = {
  hidden: false
};

ShortCut.propTypes = {
  hidden: bool
};

export default ShortCut;

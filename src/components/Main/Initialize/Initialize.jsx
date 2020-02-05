import React from 'react';
import { bool } from 'prop-types';
import Mounting from './Mounting';
import Source from './Source';
import FirstDemo from './FirstDemo';

function Initialize({ hidden }) {
  return (
    <section>
      <Mounting />
      <Source />
      {!hidden && <FirstDemo />}
    </section>
  );
}

Initialize.defaultProps = {
  hidden: false
};

Initialize.propTypes = {
  hidden: bool
};

export default Initialize;

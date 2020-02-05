import React from 'react';
import { bool } from 'prop-types';
import Principle from './Principle';
import Actions from './Actions';
import Reducer from './Reducer';
import Selectors from './Selectors';
import Store from './Store';
import Initialize from './Initialize';
import Dispatching from './Dispatching';
import Hooks from './Hooks';
import FourthDemo from './FourthDemo';
import imgRedux from '../../../assets/img/redux.png';

function Redux({ hidden }) {
  return (
    <section>
      <section id="redux" data-background-color="#2a2c2e">
        <img data-src={imgRedux} alt="Redux" />
        <h2>
          <span className="white">Redux</span>
        </h2>
      </section>
      <Principle />
      <Actions />
      <Reducer />
      <Selectors />
      <Store />
      <Initialize />
      <Dispatching />
      <Hooks />
      {!hidden && <FourthDemo />}
    </section>
  );
}

Redux.defaultProps = {
  hidden: false
};

Redux.propTypes = {
  hidden: bool
};

export default Redux;

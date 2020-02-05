import React from 'react';
import imgWithoutFlux from '../../../assets/img/without-flux.png';

export default function Without() {
  return (
    <section id="without">
      <h2>Sans Redux</h2>
      <img data-src={imgWithoutFlux} alt="Without Redux" />
    </section>
  );
}

import React from 'react';
import Setup from './Setup';
import DescribeComponent from './DescribeComponent';
import DescribeStore from './DescribeStore';
import imgJest from '../../../assets/img/jest.png';
import imgTestingLib from '../../../assets/img/testing-lib.png';

export default function UnitTest() {
  return (
    <section>
      <section id="unit-test" data-background-color="#2a2c2e">
        <img data-src={imgJest} alt="Jest" />
        <img data-src={imgTestingLib} alt="Testing Library" />
        <h2>
          <span className="white">Jest & Testing Library</span>
        </h2>
      </section>
      <Setup />
      <DescribeComponent />
      <DescribeStore />
    </section>
  );
}

import React from 'react';
import Environment from './Environment';
import Base from './Base';
import Tab from './Tab';
import Item from './Item';
import Func from './Func';
import Hoisting from './Hoisting';
import Running from './Running';
import Proto from './Proto';

export default function Coding() {
  return (
    <section>
      <section id="coding" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Let's Code</span>
        </h1>
      </section>
      <Environment />
      <Base />
      <Tab />
      <Item />
      <Func />
      <Hoisting />
      <Running />
      <Proto />
    </section>
  );
}

import React from 'react';
import imgVirtualDom from '../../assets/img/virtual-dom.png';

export default function VirtualDom() {
  return (
    <section id="virtual-dom">
      <h1>DOM Virtuel</h1>
      <p>
        Le <strong>Virtual DOM</strong>, la vraie révolution portée par{' '}
        <strong>React</strong> qui rend <strong>jQuery</strong> obsolète
      </p>
      <img data-src={imgVirtualDom} alt="VirtualDOM" />
    </section>
  );
}

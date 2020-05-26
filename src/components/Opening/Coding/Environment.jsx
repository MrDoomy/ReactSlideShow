import React from 'react';
import imgChrome from '../../../assets/img/chrome.png';
import imgEdge from '../../../assets/img/edge.png';
import imgFirefox from '../../../assets/img/firefox.png';
import imgOpera from '../../../assets/img/opera.png';
import imgSafari from '../../../assets/img/safari.png';

const SNIPPET = `
  (function() {
    'use strict';

    /* ... */
  })();
  `;

export default function Environment() {
  return (
    <section id="environment">
      <img data-src={imgChrome} alt="Chrome" />
      <img data-src={imgEdge} alt="Edge" />
      <img data-src={imgFirefox} alt="Firefox" />
      <img data-src={imgOpera} alt="Opera" />
      <img data-src={imgSafari} alt="Safari" />
      <h2>Environnement</h2>
      <p>
        Préférez le mode <code>strict</code> lors de l'exécution pour la remontée d'erreurs
      </p>
      <pre>
        <code className="javascript">{SNIPPET}</code>
      </pre>
    </section>
  );
}

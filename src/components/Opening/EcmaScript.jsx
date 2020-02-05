import React from 'react';

export default function EcmaScript() {
  return (
    <section id="ecmascript">
      <h1>EcmaScript</h1>
      <h3>
        <em>By Ecma International</em>
      </h3>
      <p>
        Créé en 1996
        <br />
        Standartisation du <strong>JavaScript</strong>
        <br />
        On parle de la norme <strong>ECMA-262</strong>
      </p>
      <ul>
        <li className="fragment" data-autoslide="250">
          1997 : ES1
        </li>
        <li className="fragment" data-autoslide="250">
          1998 : ES2 <small>(ISO)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          1999 : ES3 <small>(RegExp, Exception)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          2009 : <strong>ES5</strong> <em>aka</em> ES3.1{' '}
          <small>(JSON, XHR)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          (ES)2015 : ES6 <small>(Classes, Keywords, Promises)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          (ES)2016 : ES7 <small>(Includes, Exp Operator)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          (ES)2017 : ES8 <small>(Async / Await)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          (ES)2018 : ES9 <small>(Finally, RegExp)</small>
        </li>
        <li className="fragment" data-autoslide="250">
          (ES)2019 : ES10<small>(Flat / FlatMap)</small>
        </li>
        <li className="fragment">
          (ES)2020 : ES11... <small>(ESNext)</small>
        </li>
      </ul>
    </section>
  );
}

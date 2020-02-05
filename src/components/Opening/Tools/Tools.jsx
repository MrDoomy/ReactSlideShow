import React from 'react';
import Engine from './Engine';
import Editors from './Editors';
import VersionManager from './VersionManager';
import DepManager from './DepManager';
import Linter from './Linter';
import Design from './Design';
import Bundler from './Bundler';
import Bundle from './Bundle';
import Testing from './Testing';

export default function Tools() {
  return (
    <section>
      <section id="tools" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Outils</span>
        </h1>
      </section>
      <Engine />
      <Editors />
      <VersionManager />
      <DepManager />
      <Linter />
      <Design />
      <Bundler />
      <Bundle />
      <Testing />
    </section>
  );
}

import React from 'react';
import LangKnown from './LangKnown';
import LangLearn from './LangLearn';
import FrameKnown from './FrameKnown';
import FrameLearn from './FrameLearn';
import Merge from './Merge';
import Download from './Download';
import Misc from './Misc';

export default function Infography() {
  return (
    <section>
      <section id="infography" data-background-color="#2a2c2e">
        <h1>
          <span className="white">Infographie</span>
        </h1>
      </section>
      <LangKnown />
      <LangLearn />
      <FrameKnown />
      <FrameLearn />
      <Merge />
      <Download />
      <Misc />
    </section>
  );
}

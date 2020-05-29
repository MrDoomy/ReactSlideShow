import React, { useEffect } from 'react';
import { number, bool } from 'prop-types';

// RevealJS
import Reveal from 'reveal.js';
import HL from 'reveal.js/plugin/highlight/highlight';
import MD from 'reveal.js/plugin/markdown/markdown';

// Slides
import {
  Title,
  WhoAreYou,
  WhoAmI,
  Summary,
  Reminders,
  JavaScript,
  EcmaScript,
  TypeScript,
  Tools,
  Coding
} from './Opening';

import {
  Main,
  Intro,
  Cli,
  Preview,
  Initialize,
  StateProps,
  Nested,
  DesignPattern,
  ShortCut,
  LifeCycle,
  Pure,
  Router,
  Flux,
  Redux,
  VirtualDom,
  UnitTest
} from './Main';

import {
  Overview,
  Frameworks,
  Infography,
  DevWay,
  Quote,
  Thank,
  Appendix
} from './Ending';

function App(props) {
  const { width, height, margin, controls, slideNumber, history, mouseWheel } = props;

  useEffect(() => {
    Reveal.initialize({
      width,
      height,
      margin,
      controls,
      slideNumber,
      history,
      mouseWheel,
      transition: 'slide',
      fragmentInURL: false,
      plugins: [HL, MD]
    }).then(() => {
      try {
        const slideNumber = document.getElementsByClassName('slide-number')[0];
        slideNumber.addEventListener('click', () => Reveal.toggleOverview());
      } catch (e) {
        console.log(e);
      }
    });
  }, [width, height, margin, controls, slideNumber, history, mouseWheel]);

  return (
    <div className="reveal">
      <div className="slides">
        <Title />
        <WhoAreYou />
        <WhoAmI />
        <Summary />
        <Reminders />
        <JavaScript />
        <EcmaScript />
        <TypeScript />
        <Tools />
        <Coding />
        <Main />
        <Intro />
        <Cli />
        <Preview />
        <Initialize hidden />
        <StateProps />
        <Nested hidden />
        <DesignPattern />
        <ShortCut hidden />
        <LifeCycle />
        <Pure />
        <Router />
        <Flux />
        <Redux hidden />
        <VirtualDom />
        <UnitTest />
        <Overview />
        <Frameworks />
        <Infography />
        <DevWay />
        <Quote />
        <Thank />
        <Appendix />
      </div>
    </div>
  );
}

App.defaultProps = {
  width: 1280,
  height: 720,
  margin: 0.05,
  controls: false,
  slideNumber: false,
  history: false,
  mouseWheel: false
};

App.propTypes = {
  width: number,
  height: number,
  margin: number,
  controls: bool,
  slideNumber: bool,
  history: bool,
  mouseWheel: bool
};

export default App;

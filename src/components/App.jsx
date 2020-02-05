import React, { useEffect } from 'react';
import { number, bool } from 'prop-types';

// RevealJS
import { initialize } from 'reveal.js/js/reveal';

// HighLightJS
import { initHighlightingOnLoad as initializeOnLoad } from 'highlight.js/lib';

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
  Design,
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
    initialize({
      width,
      height,
      margin,
      controls,
      slideNumber,
      history,
      mouseWheel,
      transition: 'slide'
    });

    initializeOnLoad();
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
        <Design />
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

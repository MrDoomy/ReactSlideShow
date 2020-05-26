import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// RevealJS
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';

// HighLightJS
import 'highlight.js/styles/solarized-dark.css';

// StyleSheet
import './assets/css/index.css';

render(
  <App width={1920} height={1080} slideNumber history />,
  document.getElementById('root')
);

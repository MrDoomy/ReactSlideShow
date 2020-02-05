import React from 'react';

export default function Concept() {
  return (
    <section id="concept">
      <h2>Concept</h2>
      <div className="fragment shrink">
        <p>
          Architecture pour les flux de données unidirectionnels
          <br />
          Il existe plusieurs implémentations de <strong>Flux</strong> en{' '}
          <strong>JavaScript</strong> :
        </p>
        <ul>
          <li>Flux</li>
          <li>Fluxxor</li>
          <li>MobX</li>
          <li>
            <strong>Redux</strong>
          </li>
          <li>Reflux</li>
          <li>Relay</li>
          <li>Vuex</li>
          <li className="clearfix">...</li>
        </ul>
      </div>

      <svg fill="none" width={1250} height={100} viewBox="0 0 1250 100">
        <g className="fragment">
          <path d="M300 0v100l50-50-50-50zM0 0h300v100H0z" fill="#F44336" fillOpacity={0.75} />
          <text x={100} y={60} textAnchor="start" fill="#FDF6E3" fontSize={30}>
            Action
          </text>
        </g>
        <g className="fragment">
          <path d="M600 0v100l50-50-50-50zM300 0h300v100H300z" fill="#FF5722" fillOpacity={0.75} />
          <text x={400} y={60} textAnchor="start" fill="#FDF6E3" fontSize={30}>
            Dispatcher
          </text>
        </g>
        <g className="fragment">
          <path d="M900 0v100l50-50-50-50zM600 0h300v100H600z" fill="#FF9800" fillOpacity={0.75} />
          <text x={700} y={60} textAnchor="start" fill="#FDF6E3" fontSize={30}>
            Store
          </text>
        </g>
        <g className="fragment">
          <path d="M1200 0v100l50-50-50-50zM900 0h300v100H900z" fill="#FFC107" fillOpacity={0.75} />
          <text x={1000} y={60} textAnchor="start" fill="#586E75" fontSize={30}>
            View
          </text>
        </g>
      </svg>
    </section>
  );
}

import React from 'react';

const strike = {
  textDecoration: 'line-through'
};

export default function DevWay() {
  return (
    <section id="dev-way">
      <h2>
        The Way Of{' '}
        <span className="grey" style={strike}>
          Jedi
        </span>{' '}
        Dev
      </h2>
      <svg fill="none" width={750} height={750} viewBox="0 0 600 600">
        <g>
          <circle cx={300} cy={300} r={100} fill="#FFC106" fillOpacity={0.75} />
          <text x="50%" y={310} textAnchor="middle" fill="#586E75" fontSize={30}>
            Frameworks
          </text>
        </g>
        <g className="fragment">
          <circle cx={300} cy={300} r={150} stroke="#FF9800" strokeWidth={100} strokeOpacity={0.75} />
          <text x="50%" y={175} textAnchor="middle" fill="#FDF6E3" fontSize={30}>
            Langages
          </text>
          <text x="50%" y={450} textAnchor="middle" fill="#FDF6E3" fontSize={30}>
            Environnements
          </text>
        </g>
        <g className="fragment">
          <circle cx={300} cy={300} r={250} stroke="#FF5722" strokeWidth={100} strokeOpacity={0.75} />
          <text x="50%" y={75} textAnchor="middle" fill="#FDF6E3" fontSize={30}>
            Algorithmes
          </text>
          <text x="50%" y={550} textAnchor="middle" fill="#FDF6E3" fontSize={30}>
            Structures De Données
          </text>
        </g>
      </svg>
    </section>
  );
}

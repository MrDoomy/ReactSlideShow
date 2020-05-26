import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { generateColors, configureBar } from '../../../utils';

const styles = [
  'Electro',
  'Classique',
  'Rock',
  'Pop',
  'Metal',
  'Hip-Hop',
  'Soul / Blues',
  'Folk',
  'R&B',
  'Reggae'
];

const miscChart = {
  type: 'bar',
  data: {
    labels: styles,
    datasets: [
      {
        label: 'Musique',
        data: [25.3, 18.8, 16, 9.9, 8.7, 8, 7.9, 3, 1.6, 0.8],
        backgroundColor: generateColors(0.5),
        borderColor: generateColors(1),
        borderWidth: 1
      }
    ]
  },
  options: configureBar(false)
};

export default function Misc() {
  useEffect(() => {
    createChart('misc-chart', miscChart);
  }, []);

  const createChart = (chartId, chartData) => {
    const { type, data, options } = chartData;
    const ctx = document.getElementById(chartId);
    return new Chart(ctx, {
      type,
      data,
      options
    });
  };

  return (
    <section id="misc">
      <h2>Quel style de musique écouter lorsqu'on code ?</h2>
      <canvas id="misc-chart" style={{ display: 'block', height: 720, width: 1920 }} />
    </section>
  );
}

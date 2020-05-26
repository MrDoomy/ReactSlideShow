import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { hexToRgba, configurePie } from '../../../utils';

const downloadChart = {
  type: 'doughnut',
  data: {
    labels: ['Angular', 'React', 'Vue', 'Svelte'],
    datasets: [
      {
        data: [1644300, 8306838, 1630226, 61056],
        backgroundColor: [
          hexToRgba('#f44336', 0.5),
          hexToRgba('#00bcd4', 0.5),
          hexToRgba('#4caf50', 0.5),
          hexToRgba('#ff9800', 0.5)
        ],
        borderColor: [
          hexToRgba('#f44336', 1),
          hexToRgba('#00bcd4', 1),
          hexToRgba('#4caf50', 1),
          hexToRgba('#ff9800', 1)
        ]
      }
    ]
  },
  options: configurePie()
};

export default function Download() {
  useEffect(() => {
    createChart('download-chart', downloadChart);
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
    <section id="download">
      <h2>Téléchargements NPM*</h2>
      <h3>
        <span className="red">Angular</span> Vs.{' '}
        <span className="cyan">React</span> Vs.{' '}
        <span className="green">Vue</span> Vs.{' '}
        <span className="orange">Svelte</span>
      </h3>
      <canvas id="download-chart" style={{ display: 'block', height: 720, width: 1920 }} />
      <div className="">
        <br />
        <span className="blue-grey">
          <em>
            <small>* 10 Mai 2020</small>
          </em>
        </span>
      </div>
    </section>
  );
}

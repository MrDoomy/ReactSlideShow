import React from 'react';
import imgLess from '../../../assets/img/less.png';
import imgSass from '../../../assets/img/sass.png';
import imgStylus from '../../../assets/img/stylus.png';

export default function Design() {
  return (
    <section id="design">
      <img className="clearfix" data-src={imgLess} alt="Less" />
      <img data-src={imgSass} alt="Sass" />
      <img data-src={imgStylus} alt="Stylus" />
      <h2>CSS</h2>
      <p>
        Des feuilles qui ont du style
        <br />
        Du <em>design</em> pour vôtre application
        <br />
        Choisir entre le{' '}
        <span className="less">
          <strong>Less</strong>
        </span>
        , le{' '}
        <span className="sass">
          <strong>Sass</strong>
        </span>{' '}
        ou le{' '}
        <span className="stylus">
          <strong>Stylus</strong>
        </span>
      </p>
    </section>
  );
}

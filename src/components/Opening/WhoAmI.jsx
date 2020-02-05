import React from 'react';
import imgGitHub from '../../assets/img/github.png';
import imgGitLab from '../../assets/img/gitlab.png';

export default function WhoAmI() {
  return (
    <section id="who-am-i">
      <h1>Présentation</h1>
      <h3>Damien Chazoule</h3>
      <p>
        <em>FullStack</em> JS Developer
        <br />
        <strong>React</strong> Lover{' '}
        <small>
          (<strong>VueJS</strong> Too)
        </small>
      </p>
      <img data-src={imgGitHub} alt="GitHub" />
      <img data-src={imgGitLab} alt="GitLab" />
      <p>
        <span className="black">@Mr</span>
        <span className="deep-orange">Doomy</span>
      </p>
    </section>
  );
}

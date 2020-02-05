import React from 'react';
import imgGit from '../../../assets/img/git.png';

export default function VersionManager() {
  return (
    <section id="version-manager">
      <img data-src={imgGit} alt="Git" />
      <h2>Git</h2>
      <p>
        L'indispensable gestionnaire de versions
        <br />
        Meilleure visualisation de l'avancement du projet
        <br />
        Développement de fontionnalités par branches
        <br />
        La nécessité de l'historisation des fichiers
        <br />
        Travail collaboratif centralisé
      </p>
    </section>
  );
}

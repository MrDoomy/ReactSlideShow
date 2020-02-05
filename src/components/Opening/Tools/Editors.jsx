import React from 'react';
import classNames from 'classnames';
import imgAtom from '../../../assets/img/atom.png';
import imgSublimeText from '../../../assets/img/sublimetext.png';
import imgVsCode from '../../../assets/img/vscode.png';
import imgWebStorm from '../../../assets/img/webstorm.png';

const HEADERS = [
  {
    editor: 'Éditeur',
    pros: 'Avantages',
    cons: 'Inconvénients'
  }
];

const ROWS = [
  {
    editor: 'Atom',
    pros: 'Outil entièrement personnalisable et puissant',
    cons: 'Quelques problèmes de performance sur la durée'
  },
  {
    editor: 'Sublime Text',
    pros: 'Flexible et rapide idéal pour le développement Web',
    cons: 'Licence payante pour les fonctionnalités avancées'
  },
  {
    editor: 'Visual Studio Code',
    pros: "Prêt à l'emploi avec le débogueur et Git par défault",
    cons: `
      <span style="text-decoration: line-through;">
        Pas autant de fonctionnalités qu'un IDE
      </span>
    `
  },
  {
    editor: 'WebStorm',
    pros: `Fonctionnalités inédites avec notamment le <em>Running Coverage</em>`,
    cons: 'Modèle économique payant dégressif'
  }
];

export default function Editors() {
  return (
    <section id="editors">
      <img data-src={imgAtom} alt="Atom" />
      <img data-src={imgSublimeText} alt="Sublime Text" />
      <img data-src={imgVsCode} alt="Visual Studio Code" />
      <img data-src={imgWebStorm} alt="WebStorm" />
      <h2>Éditeurs</h2>
      <div className="beautify-table custom">
        <div className="beautify-table-head">
          <table>
            <thead>
              {HEADERS.map(({ editor, pros, cons }, idx) => (
                <tr key={idx} className="head">
                  <th className="column1">{editor}</th>
                  <th className="column2">{pros}</th>
                  <th className="column3">{cons}</th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
        <div className="beautify-table-body">
          <table>
            <tbody>
              {ROWS.map(({ editor, pros, cons }, idx) => (
                <tr key={idx} className={classNames('body', { alt: idx % 2 !== 0 })}>
                  <td className="column1">
                    <strong>{editor}</strong>
                  </td>
                  <td className="column2">
                    <div dangerouslySetInnerHTML={{ __html: pros }} />
                  </td>
                  <td className="column3">
                    <div dangerouslySetInnerHTML={{ __html: cons }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

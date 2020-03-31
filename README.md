# Application de gestion de projet agile avec EmberJS

[![Build Status](https://travis-ci.org/NathanBnm/ember-tds.svg?branch=evaluation)](https://travis-ci.org/NathanBnm/ember-tds)
[![Heroku](http://heroku-badge.herokuapp.com/?app=ember-evaluation-nb&root=/projects)](https://ember-evaluation-nb.herokuapp.com/projects)

## Fonctionnalités

Développeurs
* [X] Afficher la liste des développeurs
* [X] Ajouter un développeur
* [X] Modifier un développeur
* [X] Supprimer un développeur

Projets
* [X] Afficher la liste des projets
* [X] Ajouter un projet
* [X] Modifier un projet
* [X] Supprimer un projet

Stories
* [X] Afficher la liste des stories d'un projet
* [X] Ajouter une story à un projet
* [X] Modifier une story
* [ ] Supprimer une story
* [X] Créer une étiquette
* [X] Affecter une ou plusieurs étiquettes à une story

Étapes
* [X] Afficher la liste des étapes
* [X] Créer une étape
* [X] Modifier une étape
* [X] Supprimer une étape

Tableau de bord
* [X] Afficher le tableau de bord
* [X] Afficher les différentes étapes dans le tableau de bord
* [ ] Affecter une story à une étape
* [X] Passer une story d'une étape à une autre par glisser-déposer (fonctionnel en théorie)

## Déploiement

[Accessible sur Heroku](https://ember-evaluation-nb.herokuapp.com/projects)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd td5`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

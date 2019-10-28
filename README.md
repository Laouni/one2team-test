# One2Team - Test for Beauclair Bilong

## TL;DR

**Description :**

Le but est de consommer un web service qui publie le cours du CAC40 et du NASDAQ pour :
- dans un premier temps, afficher le tableau et la courbe des 20 dernières valeurs retournées par le service.
- dans un second temps, rendre les cellules du tableau éditables. Quand une cellule du tableau est modifiée, la courbe se met à jour.
- dans un troisième temps, rafraîchir les données toutes les secondes et mettre à jour tableau et courbe tout en conservant les éventuelles modification utilisateur.

Lors du lancement de l'application les données sont affichées continuellement dans le tableau et sur la courbe.
Pour n'afficher que les `n` dernières valeurs :
- Ouvrir le composant [App.js](src/shared/components/App/App.js)
- Commenter la `ligne 26` et ré-ouvrir l'application sur votre navigateur

## Technologies

- 🔥  `react` -  server side and client side view components.
- 🤖  `redux` -  application state and actions provider.
- 🚀  `babel` - transpiles ES6+ where needed.
- 🔧  `eslint` (airbnb), `stylelint` and `flow` - code quality tools.
- 👟  `jest` with snapshots and `istanbul` coverage - testing.
- 😺  `yarn` - dependencies manager.

## Installation

- Clone the repository,
- Install NodeJS LTS (with nvm),
- Install `yarn` (eg . `brew install yarn`),
- Execute `yarn install`.
- Clone the repository of node.js server [Tutorial Node Stock Server](https://github.com/o2t/tutorial-node-stock-server)
- Execute `yarn install`

# Development

- Open local terminal to `tutorial-node-stock-server-master` repository and launch it with `yarn start`.
- Open local terminal to `one2team-test` repository and launch it with  `yarn start`.

## Project tasks (✨ Yarn)

- `yarn build` - Build the sources.
- `yarn start` - Starts the built server.
- `yarn test` - Executes all the test suite (flow checking, unit tests and linters).
- `yarn lint` - Check the code quality with ESLint.
- `yarn flow` - Static type checking.
- `yarn jest` - Launch the unit tests and generates a coverage report.

## Project Structure

```
/
|- public
|
|- src  // All the source code
|  |- shared // The shared code
|       |- api // API retrieve data
|       |- components // Most of the project components
|          |- App // App components
|          |- StocksDataTable // StocksDataTable component
|          |- StocksGraphic // StocksGraphic component
|       |- constants // constant files
|       |- redux // redux
|          |- actions // redux actions
|          |- reducers // redux reducers
|          |- store // redux store
|       |- types
|- tools
|  |- config
|     |- test // configuration for jest
```

## Project Dependencies

The dependencies within `package.json` are structured so that the libraries required to transpile/bundle the source are contained within the `devDependencies` section, whilst the libraries required during the server runtime are contained within the `dependencies` section.

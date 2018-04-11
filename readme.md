# Broiler-with-redux
A front end boilerplate using Webpack, Babel (ES8), React, React Router, Redux, Styled Components, Jest + Enzyme, ESLint, and Hot Module Reloading.

It is based on [my other boiler plate](https://github.com/mildrenben/broiler) which does not have redux.

## Requirements

- Yarn

## Get started

```
git clone https://github.com/mildrenben/broiler-with-redux.git your-project

cd your-project

rm -rf .git

yarn install

git init

yarn start
```

Head over to `localhost:8080`.

There are already some routes and components created as an example!

---

## Components

- *Webpack*
- *Babel* - Babel ES8 with features like async functions
- *React 16*
- *React Router V4* - [Docs]
(https://reacttraining.com/react-router/web/guides/philosophy)
- *Redux*
- *Styled Components* - [Docs](https://www.styled-components.com/)
- *Test runners* - Jest + Enzyme for testing React components and other js
- *Hot Module Reloading*
- *Image Minification* - When you run `yarn build:prod` all your images will be crushed
- *ESLint*
- *Git hooks* - When committing and pushing, linting and testing is run
- *Minification + tree shaking*

### Caveats

None right now. Raise an issue if you find any.
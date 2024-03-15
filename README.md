# Cat Scrolling App.

## State handling, data fetching & infinite scrolling.

This project i found it useful for practicing different things that a Jr dev must know:

1.  Create a react app using vanilla initialization.
2.  Handling various states that depend on each other.
3.  Perform data fetching using fetch, without any dependency.
4.  Infinite scrolling.

APIs:

- Facts Random: https://catfact.ninja/fact
- Image random: https://cataas.com/

First we recover a cat random fact from first API, and then shows an image of a cat with the first word of the recovered fact using the second API.

In order to create a react app with vanilla we have to create the enter point of the application:

- First we initialized the project using Vite.

        -> npm create vite@latest and select 'Vanilla'

- Install React plugin for Vite (https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react)

        -> npm i @vitejs/plugin-react -E

- Install React dependencies, by default if we go to 'package.json' we will observe that react dependencies are not installed

        -> npm i react react-dom -E

- Create a config file named vite.config.js, in which we declare that we are going to use the previous installed react plugin.

  ```ruby
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  export default defineConfig({
  plugins: [react()],
  });
  ```

- We go to the enter point file 'main.js' (called like that because its the first file loaded in index.html), and we change the file extension from '.js' to '.jsx'. Because files with .js extension are not prepared to parse JSX syntax.

  In 'main.jsx' file we import ReactDOM and React, and render the 'app' component declared at 'index.html'

  ```ruby
  import ReactDom from 'react-dom/client';
  import React from 'react';


  const root = ReactDom.createRoot(document.getElementById('app'));

  root.render(
    <h1>Hi World</h1>
  );
  ```

- Go to 'index.html' and change 'script' extension, in order to match the modified 'main.jsx' file.

- Once all this steps are made a good practice is to install a linter, for this project is used 'standard'.

        -> npm i standard -D

  Then we go to 'package.json' and extend the 'standard' ESLint configuration, so the project inherits the rules and settings from that linter.

  ```ruby
  "eslintConfig": {
      "extends" : "./node_modules/standard/eslintrc.json"
  }
  ```

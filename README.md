# Cat Scrolling App.

## State handling, data fetching & infinite scrolling.

This project i found it useful for practicing different things that a Jr dev must know:

1. Create a react app using vanilla initialization. In order to create a react app with vanilla we have to create the enter point of the application:

- First we initialized the project using Vite -> npm create vite@latest and select 'Vanilla'.
- Install React plugin for Vite (https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react) -> npm i @vitejs/plugin-react -E.
- Install React dependencies, by default if we go to 'package.json' we will observe that react dependencies are not installed -> npm i react react-dom -E.
- Create a config file named vite.config.js, in which we declare that we are going to use the previous installed react plugin.
- We go to the enter point file 'main.js' (called like that because its the first file loaded), and we change the file extension from '.js' to '.jsx'.
- In 'main.jsx' file we import ReactDOM and React.
- Go to 'index.html' and change 'script' extension, in order to match the modified 'main' file.

2. Handling various states that depend on each other.
3. Perform data fetching.
4. Infinite scrolling.

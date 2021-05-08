---
marp: true
theme: default
header: 'Build a Robinhood Clone with REACT JS for Beginners!'
footer: 'https://www.youtube.com/watch?v=TxggrQ0nHjY&t=98s'
paginate: true
size: 16:9
---

# Build a Robinhood Clone with REACT JS for Beginners!

- [Build a Robinhood Clone with REACT JS for Beginners](https://www.youtube.com/watch?v=TxggrQ0nHjY&t=98s)
- https://agilie.com/en/blog/how-to-build-a-trading-platform-5-things-to-know-before-you-start-a-stock-market-app-like-e-trade
- [material-ui](https://material-ui.com/getting-started/installation/)
- [Asynchronous Javascript using Async - Await](https://scotch.io/tutorials/asynchronous-javascript-using-async-await)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [chartjs](https://www.chartjs.org/docs/latest/charts/line.html)
- [leaflet](https://www.npmjs.com/package/leaflet)

---

### install vs extension

- `VS Code ES7 React/Redux/React-Native/JS snippets`

---

### project init

- `npm install -g npx`
- `npx create-react-app robinhood`
- create a project on firebase [https://console.firebase.google.com/](https://console.firebase.google.com/)
- `npm install @material-ui/core`
- `npm install @material-ui/icons`
- `npm install axios`
- `npm install --save react-chartjs-2 chart.js`
- `npm install numeral`
- `npm i leaflet`

---

### firebase deployment

- `sudo npm i -g firebase-tools`
- `firebase logout`
- `firebase login`
- `firebase init`
- `Allow Firebase to collect CLI usage and error reporting information? (Y/n)` > Y
- `Please select an option:` > Use an existing project
- `Select a default Firebase project for this directory:` robinhood (robinhood)
- `What do you want to use as your public directory?` > build
- `? Configure as a single-page app (rewrite all urls to /index.html)?` Yes
- `? Set up automatic builds and deploys with GitHub?` No
- `? File build/index.html already exists. Overwrite?` Yes
- `✔ Wrote build/index.html`
- `firebase deploy`
- `Project Console: https://console.firebase.google.com/project/covid-19-tracker-e5d46/overview`
- `Hosting URL: https://covid-19-tracker-e5d46.web.app`

---

### clean up

- remove test file
- remove logo file
- clean up html and css

---

### structure app

---

### NODE

- you can use more than 1 `useEffect`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

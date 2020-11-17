---
marp: true
theme: default
header: 'Build a COVID-19 Tracker with REACT JS for Beginners (React Hooks and Material UI)'
footer: 'https://www.youtube.com/watch?v=cF3pIMJUZxM&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=6'
paginate: true
size: 16:9
---

# COVID-19 Tracker with REACT JS

- [Build a COVID-19 Tracker](https://www.youtube.com/watch?v=cF3pIMJUZxM&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=6)
- [draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [material-ui](https://material-ui.com/)
- [disease.sh](https://disease.sh/docs/)
  - [covid-19 countries api](https://disease.sh/v3/covid-19/countries)
- [Asynchronous Javascript using Async - Await](https://scotch.io/tutorials/asynchronous-javascript-using-async-await)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [chartjs](https://www.chartjs.org/docs/latest/charts/line.html)
- [leaflet](https://www.npmjs.com/package/leaflet)

---

### Wireframe

![45% bg brightness:0.9](wireframe.svg)

---

### project init

- `npm install -g npx`
- `npx create-react-app covid-19-tracker`
- create a project on firebase [https://console.firebase.google.com/](https://console.firebase.google.com/)
- `npm install @material-ui/core`
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
- `Select a default Firebase project for this directory:` covid-19-tracker-e5d46 (covid-19-tracker)
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

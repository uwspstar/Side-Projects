---
marp: true
theme: default
header: "Angular Amazon Clone"
footer: "https://www.youtube.com/watch?v=Jb3o0U6sRAg"
paginate: true
size: 16:9
---

# Build an Amazon Clone with ANGULAR for Beginners

- [Amazon Clone with ANGULAR](https://www.youtube.com/watch?v=Jb3o0U6sRAg)
- https://github.com/soutionscience/my-amazon-clone-2
- [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [material.angular.io](https://material.angular.io/)
- https://material.io/resources/icons/?style=baseline

---

# AngularAmazonClone

- `ng new angular-amazon-clone`
- `cd angular-amazon-clone`
- `ng add @angular/material`
- `ng g c COMPONENTS/checkout-subtotal --dry-run`
- `ng g c PAGES/checkout --dry-run`
- `ng g s SERVICES/api --dry-run`
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

---

### firebase deployment

- https://alligator.io/angular/deploying-angular-app-to-firebase/
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
- `firebase open`

---

## Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Code scaffolding

- Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

## Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

## Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

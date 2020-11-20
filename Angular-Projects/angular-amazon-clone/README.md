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

- [hosting-an-angular-app-on-firebase](https://angular.io/start/start-deployment#hosting-an-angular-app-on-firebase)
- [deploying-angular-app-to-firebase](https://alligator.io/angular/deploying-angular-app-to-firebase/)

---

### Hosting an Angular app on Firebase

- One of the easiest ways to get your site live is to host it using Firebase.
- `Sign up for a firebase account` on Firebase.
- Create a new project, giving it any name you like.
- Add the @angular/fire schematics that will handle your deployment using `ng add @angular/fire`.
- Install Firebase CLI globally using `npm install -g firebase-tools`.
- Connect your CLI to your Firebase account and initialize the connection to your project using `firebase login` and `firebase init`.
- Follow the prompts to select the Firebase project you are creating for hosting.
- Select the Hosting option on the first prompt.
- Select the project you previously created on Firebase.
- Select `dist/my-project-name` as the public directory.
- Deploy your application with `ng deploy`.
- `firebase deploy`
- Once deployed, visit `https://your-firebase-project-name.firebaseapp.com` to see it live!

---

- `sudo npm i -g firebase-tools`
- `firebase logout`
- `firebase login`
- `firebase init`

---

- `Allow Firebase to collect CLI usage and error reporting information? (Y/n)` > Y
- `Please select an option:` > Use an existing project
- `Select a default Firebase project for this directory:`
- `What do you want to use as your public directory?` > build
- `? Configure as a single-page app (rewrite all urls to /index.html)?` Yes
- `? Set up automatic builds and deploys with GitHub?` No
- `? File build/index.html already exists. Overwrite?` Yes
- `firebase deploy`

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

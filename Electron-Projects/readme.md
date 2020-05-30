# Electron
- https://www.udemy.com/course/electron-from-scratch/learn/lecture/19823646#overview
- https://www.electronjs.org/
- Electron uses web pages as its GUI, so you could also see it as a minimal Chromium browser, controlled by JavaScript.
- As far as development is concerned, an Electron application is essentially a Node.js application.

### first app
- npm init -y
- touch .gitignore
- npm install --save-dev electron
- update package.json
```
"main": "main.js",
"scripts": {
"start":"electron .",
"test": "echo \"Error: no test specified\" && exit 1"
},
```
- update .gitignore
```
node_modules
```
- touch main.js

# Electron
- https://www.udemy.com/course/electron-from-scratch/learn/lecture/19823646#overview
- https://www.electronjs.org/
- Electron uses web pages as its GUI, so you could also see it as a minimal Chromium browser, controlled by JavaScript.
- As far as development is concerned, an Electron application is essentially a Node.js application.

### basic
- Electron apps are developed in JavaScript
- using the same principles and methods found in Node.js development. 
- All APIs and features found in Electron are accessible through the ```electron module```

### openDevTools()
- ```win.webContents.openDevTools()``` 
- Open the DevTools.

### app.whenReady().then(createWindow)
- ```app.whenReady().then(createWindow)``` 
- This method will be called when Electron has finished initialization and is ready to create browser windows. 
- Some APIs can only be used after this event occurs.

### app.on('window-all-closed', () => {...})
- Quit when all windows are closed

### app.on('activate', () => {...})
```
if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
```
### Content-Security-Policy
- <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
- <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline'">

### icon - absolute path
- we used a ```relative path``` and it will work in ```development```, but it needs to be an ```absolute path``` when we package it later.
- icon: `${__dirname}/assets/icons/Icon_256x256.png`,
- use ```backtick``` and not single quotes.
- Please do this for all projects and all windows to avoid an error when packaging

### first app
- https://www.electronjs.org/docs/tutorial/first-app
- npm init -y
- touch .gitignore
- npm install --save-dev electron
- npm i -D nodemon 
- https://github.com/remy/nodemon#nodemon
- // need run command + R to reload electron window
- update package.json
```
"main": "main.js",
"scripts": {
    "start": "electron .",
    "dev": "nodemon --exec electron ."
},
```
- update .gitignore
```
node_modules
```
- touch main.js
- touch index.html

### API
- https://www.electronjs.org/docs/api
###  BrowserWindow
- https://www.electronjs.org/docs/api/browser-window#browserwindow

### Transparent window
- https://www.electronjs.org/docs/api/frameless-window#transparent-window

### menu : 
```
instead of using

if (isMac) {
    menu.unshift({ role: 'appMenu' })
}

using
...(isMac ? [{ role: 'appMenu' }] : []),

```
### shortcut 
- with ```accelerator``` 
```
accelerator: isMac ? 'Command+W' : 'Ctrl+W',

same

accelerator: 'CmdOrCtr+W',
```
### Global Shortcuts
```
const { app, BrowserWindow, Menu, globalShortcut } = require('electron')

...

globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload())
    globalShortcut.register(isMac ? 'Command+Alt+I' : 'Ctrl+Shift+I', () => mainWindow.toggleDevTools())
```
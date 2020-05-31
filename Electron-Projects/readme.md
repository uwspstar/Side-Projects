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
- ```BrowserWindow``` is an ```EventEmitter```.
- ```Using ready-to-show event```
- https://www.electronjs.org/docs/api/browser-window#using-ready-to-show-event

### Parent and child windows
- https://www.electronjs.org/docs/api/browser-window#parent-and-child-windows

### Modal windows
- https://www.electronjs.org/docs/api/browser-window#modal-windows

### Transparent window
- https://www.electronjs.org/docs/api/frameless-window#transparent-window

### backgroundColor
- ```let win = new BrowserWindow({ backgroundColor: '#2e2c29' })```

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
- On ```Linux``` and ```Windows```, the Command key does not have any effect so use ```CommandOrControl``` which represents Command on macOS and Control on Linux and Windows to define some accelerators
- https://www.electronjs.org/docs/api/accelerator

### Global Shortcuts
- https://www.electronjs.org/docs/api/global-shortcut

- ```globalShortcut.register(accelerator, callback)```
 ```globalShortcut.register(acceleratorArray, callback)```
- https://www.electronjs.org/docs/api/global-shortcut#globalshortcutregisteraccelerator-callback

- The shortcut is global; it will work even if the app does not have the keyboard focus.
- You should NOT use this module until the ready event of the app module is emitted.
- ```globalShortcut.isRegistered('CommandOrControl+X')```
- ```globalShortcut.unregister('CommandOrControl+X')```
- ```globalShortcut.unregisterAll()```

```
const { app, BrowserWindow, Menu, globalShortcut } = require('electron')

...

globalShortcut.register('CmdOrCtrl+R', () => mainWindow.reload())
    globalShortcut.register(isMac ? 'Command+Alt+I' : 'Ctrl+Shift+I', () => mainWindow.toggleDevTools())
```
```
const { app, globalShortcut } = require('electron')

app.whenReady().then(() => {
  // Register a 'CommandOrControl+X' shortcut listener.
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered('CommandOrControl+X'))
})

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+X')

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
```
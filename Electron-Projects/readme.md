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

### first app
- https://www.electronjs.org/docs/tutorial/first-app
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
- touch index.html


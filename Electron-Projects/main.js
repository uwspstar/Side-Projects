const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        title: "image shrike",
        width: 800,
        height: 600,
    })

    mainWindow.loadFile('index.html')
}


app.whenReady().then(createWindow)
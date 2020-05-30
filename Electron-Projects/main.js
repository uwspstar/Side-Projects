const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        title: "image shrike",
        width: 800,
        height: 600,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    })

    mainWindow.loadFile('index.html')
    // mainWindow.loadURL('http://google.com')
    // console.log('${__dirname}', `${ __dirname }`)
    // mainWindow.loadURL(`file//${__dirname}/app/index.html`) //NOT working
}


app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
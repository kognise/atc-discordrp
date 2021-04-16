if (require('electron-squirrel-startup')) process.exit(0)

const { app, BrowserWindow } = require('electron')
const path = require('path')

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) process.exit(0)

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    icon: 'images/icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false
    }
  })
  
  win.removeMenu()
  win.loadFile('app.html')
})

app.on('window-all-closed', () => {
  app.quit()
})
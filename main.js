const { app, BrowserWindow }            = require('electron');
const path                              = require('path');                          
require('electron-reload')(__dirname);
const createWin = () => {

    const win = new BrowserWindow({
        width: 900,
        height: 600,
        autoHideMenuBar: true,
        resizable: false,
        roundedCorners: true,
        icon: __dirname + '/icon.ico',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.webContents.openDevTools();
    win.loadFile('./src/views/index.html');
    // win.loadURL("http://github.com");
}

app.whenReady().then(() => {
    createWin();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})
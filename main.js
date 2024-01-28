const { app, BrowserWindow, ipcMain }               = require('electron');
const path                                          = require('path');     

if(!app.isPackaged) {
    require('electron-reload')(__dirname);
}

const createWin = () => {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        autoHideMenuBar: false,
        resizable: false,
        fullscreenable: false,
        icon: path.join(__dirname, 'src', 'resources', 'medias', '/icon.ico'),
        webPreferences: {
            // webviewTag: true,
            nodeIntegration: true,
            contextIsolation: false,
            // preload: path.join(__dirname, 'src', 'js', 'preload.js')
        }
    })
    
    if(!app.isPackaged) {
        win.webContents.openDevTools();
    }

    win.loadFile('./src/views/index.html');
}

app.whenReady().then(() => {
    createWin();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})
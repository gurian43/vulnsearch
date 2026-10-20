import { app, BrowserWindow, Menu } from 'electron'
import { join } from 'node:path'

function createWindow() {
	const window = new BrowserWindow({
		width: 1440,
		height: 900,
		minWidth: 1100,
		minHeight: 700,
		show: false,
		autoHideMenuBar: true,
		backgroundColor: '#0b0714',
		webPreferences: {
		preload: join(__dirname, '../preload/index.mjs'),
		contextIsolation: true,
		nodeIntegration: false,
		},
	})

	window.once('ready-to-show', () => window.show())

	if (!app.isPackaged && process.env.ELECTRON_RENDERER_URL) {
		window.loadURL(process.env.ELECTRON_RENDERER_URL)
	} else {
		window.loadFile(join(__dirname, '../renderer/index.html'))
	}
}

app.whenReady().then(() => {
	Menu.setApplicationMenu(null)
	createWindow()
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
import { app, BrowserWindow } from "electron";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.mjs"),
			sandbox: false
		}
	});

	win.loadFile("index.html");
	win.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow();
});
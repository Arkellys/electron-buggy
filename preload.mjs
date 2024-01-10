import { contextBridge } from "electron";
import { rimrafSync } from 'rimraf'; // Not bugging

contextBridge.exposeInMainWorld("electronAPI", {
	isPreloadLoaded: () => "YES"
});

console.log("Preload loaded");
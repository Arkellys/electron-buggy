import { contextBridge } from "electron";

import "./importables/importable-one.mjs" // Will bug all the time with this
// import { rimraf } from 'rimraf'; // Will bug all the time with this

contextBridge.exposeInMainWorld("electronAPI", {
	isPreloadLoaded: () => "YES"
});

console.log("Preload loaded");
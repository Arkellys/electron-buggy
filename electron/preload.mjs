import { contextBridge } from "electron";

import "./importables/importable-one.mjs" // Will bug inconcistently with this
// import { rimraf } from 'rimraf'; // Will bug all the time with this

console.log("Preload loaded");

contextBridge.exposeInMainWorld("electronAPI", {
	isPreloadLoaded: () => "YES"
});
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
	isPreloadLoaded: () => "YES"
});

console.log("Preload loaded");
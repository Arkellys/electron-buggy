console.log("Renderer loaded");

const isPreloadLoaded = window.electronAPI?.isPreloadLoaded() || "NO";
document.getElementById("isPreloadLoaded").innerHTML = isPreloadLoaded;

// Change this line to trigger a reload...
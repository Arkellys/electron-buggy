module.exports = {
	renderers: {
		index: "./src/renderer.js"
	},
	preloads: {
		app: "./electron/preload.mjs"
	},
};
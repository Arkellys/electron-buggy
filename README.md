A temporary repository to showcase the bug of the [this issue](https://github.com/electron/electron/issues/40777).


#### Branches:
- `main` → "Vanilla" Electron project without bundler, **works as expected**
- `with-webpack` Electron project with [webpack](https://webpack.js.org/) as bundler (for renderer only), **has the bug**
- `with-vite` Electron project with [Vite](https://vitejs.dev/) as bundler (for renderer only), **has the bug**

See the `README` file for each branch for instructions on how to reproduce the bug.
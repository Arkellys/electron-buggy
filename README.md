To start the app:

```shell
yarn vite
yarn start
```

The bug can be reproduced by commenting/uncommenting the following imports on the file `preload.mjs`:

```js
import "./importables/importable-one.mjs";
import { rimraf } from 'rimraf';
```

And then reload the app by either updating the file `renderer.js`, or reloading the app with <kbd>Ctrl</kbd> + <kbd>R</kbd> (Reload) or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> (Force reload).


### Test cases

🟢 No bug - 🔴 Always bug - 🟡 Inconsistent

| Action           | Imports | Results |
|------------------|---------|:-------:|
| Starting the app | none    |  🟡    |
|                  | files   |  🔴    |
|                  | rimraf  |  🔴    |
| Reload           | none    |  🔴    |
|                  | files   |  🔴    |
|                  | rimraf  |  🔴    |
| Force reload     | none    |  🟡    |
|                  | files   |  🔴    |
|                  | rimraf  |  🔴    |
| Hot reload       | none    |  🟡    |
|                  | files   |  🟡    |
|                  | rimraf  |  🔴    |
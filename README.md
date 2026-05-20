# React Training (Vite)

This project uses **Vite** for development and build.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in development mode (Vite).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any runtime errors in the console.

### `yarn test`

Runs tests via **Jest standalone** (with coverage and thresholds).\
If you want watch mode, you can pass Jest flags, for example: `yarn test --watch`.

### `yarn build`

Generates the production build (Vite) in the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn preview`

Starts a local server to preview the production build.

### `yarn typecheck`

Runs TypeScript (`tsc`) without emitting files.

## Structure (quick)

- App entry: `index.html` (root) → `src/index.tsx`
- Vite config: `vite.config.ts` (port `3000`, output in `build/`)

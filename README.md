# React Training (Vite)

This project uses **Vite** for development and build.

## Stack

- React 18 + TypeScript
- [MUI](https://mui.com/) v9 (Material UI) for the components
- [effector](https://effector.dev/) for state management
- Formik + yup for the "Beer Formik" form
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for tests

## Requirements

- Node.js `22.12` or newer (required by Vitest 5)
- Yarn 1 (`yarn install`)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in development mode (Vite).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any runtime errors in the console.

### `yarn test`

Runs the tests once via **Vitest** (jsdom environment), with coverage.\
Coverage must stay at **100%** (statements, branches, functions and lines), otherwise the command fails.

For watch mode, run `yarn vitest`. To run a single file: `yarn vitest src/App.test.tsx`.

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
- Vite config: `vite.config.ts` (port `3000`, output in `build/`); it also holds the Vitest config (`test` block)
- Components: `src/components/<name>/`, split into a container (`Name.tsx`), a view (`NameView.tsx`) and the view styles as MUI `sx` objects (`NameView.styles.ts`)
- State: `src/stores/` (effector stores, events and effects)
- Tests: next to each file as `*.test.ts(x)`; global setup in `src/setupTests.ts` and shared helpers in `src/test-utils/`

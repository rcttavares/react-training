# React Training (Vite)

Este projeto usa **Vite** para desenvolvimento e build.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Roda o app em modo de desenvolvimento (Vite).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any runtime errors in the console.

### `yarn test`

Roda os testes via **Jest standalone** (com coverage e thresholds).\
Se quiser rodar em modo watch, você pode passar flags do Jest, por exemplo: `yarn test --watch`.

### `yarn build`

Gera o build de produção (Vite) na pasta `build`.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn preview`

Sobe um servidor local para pré-visualizar o build de produção.

### `yarn typecheck`

Roda o TypeScript (`tsc`) sem emitir arquivos.

## Estrutura (rápido)

- Entrada do app: `index.html` (raiz) → `src/index.tsx`
- Config do Vite: `vite.config.ts` (porta `3000`, output em `build/`)

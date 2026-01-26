# React Training (Vite)

Este projeto usa **Vite** para desenvolvimento e build.

> Observação: a suíte de testes ainda roda via **react-scripts/Jest** (legado do CRA) enquanto a migração de testes não é concluída.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Roda o app em modo de desenvolvimento (Vite).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any runtime errors in the console.

### `yarn test`

Roda os testes (Jest via react-scripts).\
Por padrão roda em watch e gera coverage (configurado no `package.json`).

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

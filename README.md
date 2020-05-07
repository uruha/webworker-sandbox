# SandBox for Web Worker

## Spec
- lang: typescript
- build: webpack
  - webworker: `comlink-loader`
  - style: `style-loader`, `css-loader`
  - file: `url-loader`
  - typescript: `ts-loader`

## Development
```bash
$ npm i
$ npm run dev
# > localhost:8080
```
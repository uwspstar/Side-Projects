### TypeScript Setup With Node & Express

- TypeScript Setup With Node & Express
- https://www.youtube.com/watch?v=zRo2tvQpus8&t=140s

### setup

- \$ sudo npm i -g typescript
- \$ tsc --version
- \$ touch .gitignore
- \$ mkdir src
- \$ touch src/app.ts
- \$ code-insiders src/app.ts
- \$ mkdir dist

### created a tsconfig.json file

- \$ tsc --init

### modify tsconfig.json

- "target" : "es6"
- "module" : "commonjs"
- "outDir": "./dist"
- "rootDir": "./src"
- "moduleResolution": "node"

### run build ./src .ts files, and output .js to ./dist

- \$ tsc

### create package.json for node

- \$ npm init -y
- \$ npm i express
- \$ npm i -D nodemon
- \$ npm i -D typescript ts-node
- \$ npm i -D @types/node @types/express

### update package.json

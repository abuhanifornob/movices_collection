## Project Setup

### package.json File Create

```cmd
npm init -y

```

### install Express

```cmd
npm install express --save
```

### install Mongoose

```cmd
npm install mongoose --save
```

### install typescript devdepence

```cmd
npm install typescript --save-dev
```

### install Cors

```cmd
 npm i cors
```

### install corse type

```cmd
npm install --save @types/cors

```

### install Dotenv

```cmd
npm install dotenv --save
```

### Create a **src** file in to root file

then create a file int to src file.
**app.ts**
sample code

```code
import express, { Application, Request, Response } from "express";
const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World ");
});

app.listen(port, () => {
  console.log(` App is listening on port ${port}`);
});

```

## then create a tsconfig.json file

```cmd
tsc --init
```

modified tsconfig file...

```code
 "outDir": "./dist"
 "rootDir": "./src"
```

then bild the ts file to js file

```cmd
tsc
```

then we run the project

```cmd
node ./dist/app.js
```

install ts-node-dev

```cmd
npm i ts-node-dev
```

So you just combine node-dev and ts-node options (see docs of those packages):

```cmd
ts-node-dev --respawn --transpile-only .src/app.ts
```

update Json Script for command line

```code
 "scripts": {
    "start:prod": "node ./dist/app.js",
    "start:dev": "ts-node-dev --respawn --transpile-only ./src/app.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

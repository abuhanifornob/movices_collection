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

### Create a **src** file in the root

then create file int src
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

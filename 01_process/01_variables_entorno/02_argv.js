// node 02_argv.js

// console.log(process.argv);
/*
[
  'C:\\Users\\27462901130\\AppData\\Roaming\\nvm\\v22.13.0\\node.exe',
  'C:\\Users\\27462901130\\Desktop\\virm\\backend_3\\argv.j
s'
]
*/
// console.log(process.argv[0]);
// console.log(process.argv[2]); // undefined

// console.log(process.argv);
// console.log(process.argv[2]);

/*
import express from "express";
const app = express();
const PORT = process.argv[2] || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
*/

// Acá pasamos argumentos por consola, que es pasar valores
// En commander pasamos flags, porque definimos un comportamiento
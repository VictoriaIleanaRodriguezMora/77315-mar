console.log(process.argv);
// [
//   'C:\\Users\\27462901130\\AppData\\Roaming\\nvm\\v22.13.0\
// \node.exe',
//   'C:\\Users\\27462901130\\Desktop\\virm\\backend_3\\argv.j
// s'
// ]
console.log(process.argv[2]);

import express, { json, urlencoded } from "express";
const app = express();
const PORT = process.argv[2] || 8080;

// Son funciones middleware
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});

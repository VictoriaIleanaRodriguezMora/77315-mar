// # por defecto busca el .env
import express from "express";
import dotenv from "dotenv";
import process from "process"
import 'dotenv/config' // busca un archivo .env

// const ENV = process.argv[2] // prod
// dotenv.config({ path: ENV === "prod" ? "./.env.prod" : "./.env.dev" });

/* 
const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`SERVER EN PORT ${PORT} ambiente: ${NODE_ENV}`);
});
*/


// ------------------------------------------------

// console.log(process.env.PORT);
/*
const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`SERVER EN PORT ${PORT} ambiente: ${NODE_ENV}`);
});

*/

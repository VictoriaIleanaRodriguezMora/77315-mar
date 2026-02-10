// # por defecto busca el .env
import express from "express";
import dotenv from "dotenv";
// import 'dotenv/config' // busca un archivo .env
// dotenv.config() // es lo mismo ⬆️

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

// ------------------------------------------------
// EJ 2
/*
const ENV = process.argv.slice(2)[0]; // o process.argv[2]
// ternario
// condicion a evaluar ? si es true ; si no, si es falso
dotenv.config({ path: ENV === "prod" ? "./.env.prod" : "./.env.dev" });

const app = express();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`SERVER EN PORT ${PORT} ambiente: ${NODE_ENV}`);
});
*/

// ---------------------------------------
// Ej 3
/* 
import config from "./05_config.js"
const app = express();
const PORT = config.PORT;
const NODE_ENV = config.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`SERVER EN PORT ${PORT} ambiente: ${NODE_ENV}`);
});
*/

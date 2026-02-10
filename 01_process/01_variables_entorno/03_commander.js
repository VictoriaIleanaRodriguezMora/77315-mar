// node 01_process/03-commander.js
// node 01_process/03-commander.js p- 8081 -m prod a b c d

import express, { json, urlencoded } from "express";
import { Command } from "commander";
const app = express();
// const PORT = process.argv[2] || 8080;

// commander
const commander = new Command(); // instanciamos
// recibe comando, descripcion, valor default
commander
  .argument('[args...]', 'argumentos no definidos')
  .option("-p <port>", "port server", 8080)
  .option("-e <environment>", "ambiente del servidor", "dev");

commander.parse(); // para crear la configuración de los comandos. Es 'guardaru'

console.log(commander.opts()); // devuelve todos los comandos configurados en forma de objeto

// ⬆️ OUTPUT: { p: '8081', e: 'prod' }

console.log(commander.args); // los argumentos sueltos que le envío, porque puedo pasar argumentos sin flasgs que tenga configurado. sigo teniendo acceso a ellos en un array

// ⬆️ OUPUT: [ 's' ]

// # Usar los valores de commander 
const PORT = commander.opts().p // no le pongo valores por defecto porque ya los definí  en el option 
const ENVIRONMENT = commander.opts().e

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
  console.log(`Ambiente elegido ${ENVIRONMENT}`);
});

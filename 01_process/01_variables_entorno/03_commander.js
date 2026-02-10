// node 03_commander.js
// node 03_commander.js -p 9999 -e prod
// node 03_commander.js -p 9999 -e prod a b c d

import express from "express";
import { Command, Option } from "commander";
const app = express();

const commander = new Command(); // instanciamos
// .option --> recibe (comando, descripcion, valor default)

commander
  // .argument("[args...]", "argumentos no definidos")
  .option("-p <port>", "port server descripcion", 8080)
  .option("-e <environment>", "ambiente del servidor", "dev");

commander.parse(); // para crear la configuración de los comandos. Es para 'guardar' el parse

console.log(commander.opts()); // devuelve todos los comandos configurados en forma de objeto. OUTPUT: { p: '8081', e: 'prod' }
console.log(commander.opts().p); // 8080
console.log(commander.opts().e); // dev

// # Usar los valores de commander
/*-
const PORT = commander.opts().p; // no le pongo valores por defecto porque ya los definí  en el option
const ENVIRONMENT = commander.opts().e;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`Ambiente elegido ${ENVIRONMENT}`);
});
*/

// console.log(commander.args); // los argumentos sueltos que le envío, porque puedo pasar argumentos sin flasgs que tenga configurado. sigo teniendo acceso a ellos en un array
// // ⬆️ OUPUT: [ 's' ]

//  Con validación
// commander
//   // .option("-p <port>", "port server descripcion", 8080).makeOptionMandatory(true) // hacerla obligatoria
//   .option(
//     "-p <port>",
//     "port server descripcion",
//     (value) => {
//       const port = Number(value);

//       if (!Number.isInteger(port) || port < 1 || port > 65535) {
//         throw new Error("El puerto debe ser un número entre 1 y 65535");
//       }

//       return port;
//     },
//     8080,
//   )
//   .addOption(
//     new Option("-e <environment>", "ambiente")
//       .choices(["dev", "prod", "test"])
//       .default("dev"),
//   );

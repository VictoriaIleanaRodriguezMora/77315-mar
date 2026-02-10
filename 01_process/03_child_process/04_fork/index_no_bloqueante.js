// node 01_process/03_child_process/04_fork/index_no_bloqueante.js

import express from 'express';
import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = path.resolve(__dirname, './utils/calculo.js'); // lo traigo leyendo el archivo 

const app = express();
let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensaje: 'Servidor No Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  // en vez de llamar a la función directamente, llamo a fork, y le paso el script donde está el calculo 
  const computo = fork(scriptPath); // con esto le digo a fork que ejecute este archivo 
  // entonces, cuando llega la req en /calculo, envía el mensaje con el metodo .send() y dentro de send, va el mensaje que quiero enviar
  computo.send('start');  // va el mensaje 'start'

  // recibe acá, el calculo, en (sum) e imprime por pantalla el resultado
  computo.on('message', (sum) => {
    res.json({
      resultado: sum,
    });
  });
});

const puerto = 8081;

const server = app.listen(puerto, () => {
  console.log(
    `Servidor No Bloqueante escuchando en el puerto ${puerto} & PID: ${process.pid} http://localhost:${puerto}`
  );
});

server.on('error', (error) => console.log(`Error en servidor: ${error}`));

/*
de esta manera, el proceso hijo en http://localhost:8081/, demora lo que tenga que demorar, pero el proceso principal http://localhost sigue respondiendo normalmente
*/
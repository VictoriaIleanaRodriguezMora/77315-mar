// node index_bloqueante.js

import express from 'express';
import { calculo } from './utils/calculo.js';
/*
En este ejemplo, si levanto http://localhost:8080 va todo ok, le doy a f5 una y otra vez y lo hace instantaneo.
// Si levanto http://localhost:8080/calculo y la dejo 'pensando' y voy a la principal, ya no va a ser instantaneo

la ruta principal queda bloqueada hasta que /calculo se resuelve
por eso es bloqueante, no tiene procesos hijos que respondan solicitudes bloquantes, sincronicas

acá estamos simulando un tráfico alto de request mediante calculo. una app no prepara para soportar un gran volumen de request, tranquilamente le puede pasar eso

*/
const app = express();

let visitas = 0;

app.get('/', (req, res) => {
  visitas += 1;
  res.json({
    mensaje: '* Servidor Bloqueante',
    visitas,
  });
});

app.get('/calculo', (req, res) => {
  const resultado = calculo(); // espera de manera SINCRONA
  res.json({
    resultado,
  });
});

const puerto = 8080;

const server = app.listen(puerto, () => {
  console.log(`Servidor Bloqueante escuchando en el puerto ${puerto} \n http://localhost:8080`);
});

server.on('error', (error) =>
  console.log(`Error en servidor: ${error}`)
);

// node 01_exec.js

import { exec } from "child_process";
const comando_1 = "ls -lh";
const comando_2 = "find C:/";

// lo máximo que exec puede devolver es 1GB, y ese comando desvuelve una respuesta mayor a 1GB
// el comando_2, no lo puede ejecutar pq
exec(comando_2, (err, stdout, stderr) => {
  // err --> NO se pudo ejecutar
  if (err) {
    console.log(`Error --> ${err.message}`);
    return;
  }

  // Aparece si el comando se ejecutó, pero el rtado dió un error
  if (stderr) {
    console.log("STDERR");
    console.log(stderr);
    return;
  }

  // Si nada falla, llega a acá y devuelve el stdout
  console.log(stdout);
});

console.log(`PID Principal ---> ${process.pid}`);

// node 03-uncaughtExceptionEvent

// 'uncaughtException' se dispara cuando ocurre un error que no fue atajado por el programa

// el evento genera un código, que es recibido en la funcion
process.on("uncaughtException", (error) => {
    console.log("Evento uncaughtException");
    
  console.log(`UncaughtException: ${error.message}\n`);
  console.log(error.stack); // este es el mensaje de error en sí mismo
  process.exit(1); // para los uncaughtException puedo definir un codigo de error a usar
});

function funcion_de_prueba() {
  console.log("Mi función de prueba");
  throw new Error('Mensaje de error personalizado') // este error no está siendo manejado
}

funcion_de_prueba() // ejecuto la funcion que genera un error, para probar el evento 
// cd global_child_process
// node 01_process/global_child_process/03-uncaughtExceptionEvent
// node 01_process/03-uncaughtExceptionEvent

// el método 'on', recibe 2 parametros, el evento que escucha, y una fn callback
// igual que el metodo addEventListener de js vainilla

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
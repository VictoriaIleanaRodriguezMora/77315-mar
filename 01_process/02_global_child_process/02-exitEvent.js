// cd global_child_process
// node 01_process/global_child_process/02-exitEvent.js
// node 01_process/02-exitEvent.js

// el método 'on', recibe 2 parametros, el evento que escucha, y una fn callback
// igual que el metodo addEventListener de js vainilla

// el evento genera un código, que es recibido en la funcion
process.on("exit", (code) => {
console.log(`Exit ==> El proceso terminó con código ${code}`);
// Exit ==> El proceso terminó con código 0
});

console.log("EJECUTANDO");

process.exit(2) // el nro que yo le pasó acá, le llega al evento 'exit'

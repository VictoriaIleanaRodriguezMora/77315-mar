// node global_child_process/01-beforeExitEvent.js
// node 01-beforeExitEvent.js

// el método 'on', recibe 2 parametros, el evento que escucha, y una fn callback
// igual que el metodo addEventListener de js vainilla

// beforeExit se ejecuta cuando node no tiene más tareas para ejecutar
// entonces, despues de mi console log, se ejecuta el beforeExit

// el evento genera un código, que es recibido en la funcion
process.on("beforeExit", (code) => {
console.log(`BeforeExit ==> El proceso terminó con código ${code}`);
// BeforeExit ==> El proceso terminó con código 0
});

console.log("EJECUTANDO");

// process.exit() // con esto el beforeExit, no se ejecuta

// node 02-exitEvent.js

// 'exit' se va a ejecutar cuando el proceso muere. ya sea porque terminó bien o porque se disparó un error que no se atajó

// el evento genera un código, que es recibido en la funcion
process.on("exit", (code) => {
  console.log(`Exit ==> El proceso terminó con código ${code}`);
  // Exit ==> El proceso terminó con código 0
});

console.log("EJECUTANDO");

process.exit(2) // el nro que yo le pasó acá, le llega al evento 'exit'. si no le paso nada, llega con codigo 0

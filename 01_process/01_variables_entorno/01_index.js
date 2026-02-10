console.log(process.cwd()); // C:\Users\27462901130\Desktop\virm\backend_3
console.log(process.pid); // 6328
console.log(process.version); // Versión de motor de ejecución que está ejecutando el proceso, node. v22.13.0
console.log(process.platform); // S.O. win32
console.log(process.memoryUsage());
// {
//   rss: 27955200,
//   heapTotal: 5779456,
//   heapUsed: 4450656,
//   external: 1502107,
//   arrayBuffers: 10515
// }
console.log(process.exit()); // terminar el proceso intencionalente 
console.log("hola"); // esto no se ejecuta, porque no se ejecuta nada despues del exit

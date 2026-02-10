// node 03_spawn.js
import { spawn } from 'child_process';

// # la salida de la ejecución está en la vbariable child
const child = spawn('find', ['/']); // 'find /' no funciona

child.stdout.on('data', (data) => {
  console.log('RECIBI DATA STDOUT');
  console.log(`stdout:\n\n\n${data}`);
});

// 🔽 Error de ejecución, que no PUDO a ejecutarse 
child.stderr.on('data', (data) => {
  console.log('RECIBI DATA STDERR');
  console.error(`stderr: ${data}`);
});

// Error en tiempo de ejecución
child.on('error', (error) => {
  console.error(`error: ${error.message}`);
});

// cuando termina de ejecutar, se ejecuta close. como el finally de las promesas
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// la data llega en cuotas, y no da error
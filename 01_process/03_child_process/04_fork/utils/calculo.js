// tarea sumamente larga, pesada SINCRONA
export const calculo = () => {
    let sum = 0;
    for (let i = 0; i <= 10000000000; i++) {
        sum += i;
    }
    return sum;
};

// index_no_bloqueante.js
// PROCESO HIJO
// este process.on lo que hace es ejecutar el evento 'message' , que recibe un mensaje (msg)
process.on('message', (msg) => {
    // si el msg que recibe, es igual a 'start'
    if (msg == 'start') {
        // va a realizar el calculo
        console.log(`Start calculo, PID: ${process.pid}`);
        const sum = calculo(); // ejecuta el calculo
        process.send(sum); // cuando termina de realizar el calculo, le envía AL PADRE, el rtado del calculo
    }
});
// el proceso está a la espera, de que le envíen el mensaje para ejecutarse 


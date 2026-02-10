process.stdin.setEncoding("utf-8"); // Configuracion para los caracteres. porque internamente llega como buffer

let inputData = ""; // caja donde se va a ir guardando todo lo que llegue

process.stdin.on("data", (chunk) => {
  inputData += chunk; // cada vez que llega un nuevo texto, lo concatena
});

process.stdin.on("end", () => {
  // ya no se reciben datos cuando ocurre el evento 'end'
  const lines = inputData.trim().split("\n");

  let CONFIG_LEVEL = process.env.CONFIG_LEVEL;

  lines.forEach((line) => {
    if (line.startsWith("set ")) {
      CONFIG_LEVEL = line.split(" ")[1];
      process.env.CONFIG_LEVEL = CONFIG_LEVEL;
      return;
    }

    if (line === "get") {
      const level = process.env.CONFIG_LEVEL;

      if (level === "high") {
        console.log("Configuración alta activada");
      } else if (level === "low") {
        console.log("Configuración baja activada");
      } else {
        console.log("Configuración por defecto activada");
      }
    }
  });
});

// Esto no es para una app de express

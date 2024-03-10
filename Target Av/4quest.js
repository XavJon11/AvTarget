//4quest
function descobrirInterruptores() {
    let interruptor1 = false;
    let interruptor2 = false;
    let interruptor3 = false;

    // Primeira visita à sala
    console.log("Primeira visita à sala:");
    interruptor1 = true;
    console.log("Ligando o interruptor 1...");
    console.log("Desligando o interruptor 1 e ligando o interruptor 2...");
    interruptor1 = false;
    interruptor2 = true;

    // Segunda visita à sala
    console.log("\nSegunda visita à sala:");
    if (interruptor1) {
        console.log("A lâmpada está acesa: o primeiro interruptor controla essa lâmpada.");
    } else if (interruptor2) {
        console.log("A lâmpada está acesa: o segundo interruptor controla essa lâmpada.");
    } else {
        console.log("A lâmpada está apagada.");
        console.log("Se a lâmpada estiver quente, o primeiro interruptor controla essa lâmpada.");
        console.log("Se a lâmpada estiver fria, o terceiro interruptor controla essa lâmpada.");
    }
}

// Chama a função para descobrir qual interruptor controla cada lâmpada
descobrirInterruptores();
//2quest
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    // Se o número for 0 ou 1, ele pertence à sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Calcula a sequência de Fibonacci até encontrar um número maior que o número dado
    let c = a + b;
    while (c <= numero) {
        if (c === numero) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }

    // Se o número não foi encontrado na sequência de Fibonacci até aqui, então não pertence
    return false;
}

// Número a ser verificado
let numeroVerificar = 21; // Pode alterar este valor para testar outros números

// Chama a função para verificar se o número pertence à sequência de Fibonacci
if (pertenceFibonacci(numeroVerificar)) {
    console.log("O número informado pertence à sequência de Fibonacci.");
} else {
    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

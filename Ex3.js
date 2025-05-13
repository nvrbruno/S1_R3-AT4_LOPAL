let valor; // variavel que arazena o valor da compra
let total = 0; // variavel do total para que o valor nao interfira na soma dos valores

do {
    valor = parseFloat(prompt("Escreva o valor da compra:")); // programa pede para o usuario informar os valores

    if (valor > 0) {
        total += valor; // se o valor for maior que zero ele repete infintamente
    } else if (valor < 0 || isNaN(valor)) {  // se o valor for menor que zero ou o usuario escreva uma letra o programa pede para o usuario escrever um numero maior que zero
        alert("Escreva um valor maior que 0");
    }

} while (valor === 0); // funcao que repete a funcao ate que o valor seja igual a zero, se for o programa escreve o valor total da compra

alert(`Total da compra é de: ${total.toFixed(2)}R$`);
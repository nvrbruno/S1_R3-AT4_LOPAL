let numero; // variável que armazena o valor dado pelo usuário

do {
    numero = parseInt(prompt("Escreva um número positivo:")); //função que pede ao usuário escrever um numero positivo

    if (numero < 0 || isNaN(numero)) { //condição quando o número for menor que zero e se o usuário colocar uma letra ele não aceita
        alert("você não escreveu um número positivo");
    }
} while (numero < 0 || isNaN(numero)); //função que enquanto o usuário não digitar um número positivo fica repetindo infintamente

alert(`boa você digitou um numero positivo`);
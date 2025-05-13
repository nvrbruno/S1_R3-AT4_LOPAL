let numero; // variavel que armazena o valor dado pelo usuario

do {
    numero = parseInt(prompt("Escreva um número positivo:")); //funcao que pede ao usuario escrever um numero positivo

    if (numero < 0 || isNaN(numero)) { //condicao quando o numero for menor que zero e se o usuario colocar uma letra ele nao aceita
        alert("você não escreveu um número positivo");
    }

} while (numero < 0 || isNaN(numero)); //funcao que enquanto o usuario nao digitar um numero positivo fica repetindo infintamente

alert(`boa você digitou um numero positivo`);
let primeiroNome = ""; //variável que arazena o primeiro nome dado pelo usuário
let sobrenome = "";//variável que arazena o sobrenome dado pelo usuário

do {
    primeiroNome = prompt("Digite seu primeiro nome:");
} while (primeiroNome === ""); //função que pede pro usuario o prmeiro nome, se o usuario nao digitar nada o programa repete ate o usuario escrever

do {
    sobrenome = prompt("Digite seu sobrenome:");
} while (sobrenome === "");//função que pede pro usuario o sobrenome, se o usuario não digitar nada o programa repete ate o usuario escrever

alert(`oii, ${primeiroNome} ${sobrenome} como que você está?`); // quando o programa termina mostra pro usuario o nome e o sobrenome do usuario
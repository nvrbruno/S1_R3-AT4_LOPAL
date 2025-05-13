let saldo = 50; //variavel que armzaena o saldo do usuario
let saque; //variavel que armzaena o saldo do usuario

while (saldo > 0) { 
    saque = parseFloat(prompt(`Seu saldo atual é R${saldo.toFixed(2)} Escreva o valor que quer sacar:`)); //mostra para o usuario o valor que deseja sacar e o saldo dele

    if (isNaN(saque) || saque <= 0) { // verifica se o valor de saque é maior que zero e se ele esta escrevendo apenas nuneros senao ele pede para o usuario escrever um valor maior que zero
        alert("Digite um valor maior que 0.");
    } else if (saque > saldo) { // verifica se o usario esta tentando sacar mais do que ele tem, se estiver o programa fala que ele nao tem saldo suficiente
        alert("Você não tem saldo");
    } else {
        saldo -= saque;
        alert(`Você fez um saque de ${saque.toFixed(2)}R$ agora você tem ${saldo.toFixed(2)}R$`); // quando ele termina o programa mostra o valor do saque e o montante restante
    }
}

alert("Você não tem saldo"); // caso nehuma funcao de certo o programa avisa para o usuario que ele nao tem saldo
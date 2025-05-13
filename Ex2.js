let nota; //variavel que armzena as notas do usuario
let soma = 0; // variavel da soma (tem que ser zero para nao interferir no calculo da media)
let i = 0; // variavel da repeticao

do { // funcao que pede o valor da nota infintamente
    nota = parseFloat(prompt(`${i + 1}ª nota`)); 
    if (nota >= 0 && nota <= 10) { // condicao verifica que um numero é maior ou igual a zero e menor que 10
        soma += nota;
        i++;
    } else if (nota >= 0 && nota >= 10) { // condicao verifica que um numero é menor ou igual a zero e maior que 10
        alert("Nota inválida. Digite um número entre 0 e 10.");
    }
} while (nota >= 0); //funcao que termina o programa quando a nota for menor que zero ou igual

if (i > 0) {
    alert(`Média das ${i} notas: ${(soma / i).toFixed(2)}`); //quando o programa termina e o i é maior que 0 o programa exibe a media
} else {
    alert("Nenhuma nota válida foi digitada."); //caso i seja menor que zero o programa fala que nenhuma nota valida foi digitada
}

let nota; //variável que armzena as notas do usuário
let soma = 0; // variável da soma (tem que ser zero para não interferir no calculo da media)
let i = 0; // variável da repetição

do { // função que pede o valor da nota infintamente
    nota = parseFloat(prompt(`${i + 1}ª nota`)); 
    if (nota >= 0 && nota <= 10) { // condição verifica que um número é maior ou igual a zero e menor que 10
        soma += nota;
        i++;
    } else if (nota >= 0 && nota >= 10) { // condição verifica que um número é menor ou igual a zero e maior que 10
        alert("Nota inválida. Digite um número entre 0 e 10.");
    }
} while (nota >= 0); //funçãoo que termina o programa quando a nota for menor que zero ou igual

if (i > 0) {
    alert(`Média das ${i} notas: ${(soma / i).toFixed(2)}`); //quando o programa termina e o i é maior que 0 o programa exibe a media
} else {
    alert("Nenhuma nota válida foi digitada."); //caso i seja menor que zero o programa fala que nenhuma nota valida foi digitada
}

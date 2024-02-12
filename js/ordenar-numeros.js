// Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
function ordenarNumeros(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    console.log(numeros);
    return numeros;
}
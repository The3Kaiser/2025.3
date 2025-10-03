//faça um programa para verificar  o maior entre os dois números
let num1 = parseFloat(prompt('Digite um número'));
let num2 = parseFloat(prompt('Digite outro número'));
if (num1 > num2){
    document.write('O maior é: ', num1)
} else if (num2 > num1){
    document.write('O maior é: ', num2)
} else{
    document.write('Os dois números são iguais')
}
//Verificar se um numero esta dentro de dois intervalos entre 1 e 10 (inclusive), entre 50 e 100 (inclusive)
let numero = parseInt(prompt('Digite um numero inteiro'));
if((numero >= 1 && numero   <= 10 , numero <= 50 && numero >= 100)){
    document.write('Numero válido')
} else {
    document.write('Número inválido')
}
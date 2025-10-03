let n1 = Number(prompt('Digite o primeiro numero '))
let n2 = Number(prompt('Digite o segundo numero '))
let operacao = prompt('Digite a operação "+,-,*,/"');
let resultado;
switch (operacao){
    case "+": 
    resultado = n1 + n2;
    break
    case "-":
    resultado = n1 - n2;
    break
    case "*":
    resultado = n1 * n2;
    break
    case "/":
    resultado = n1 / n2
    break
    case "/":
    resultado = n2!== 0 ? n1 / n2: 'Divisão por zero não existe.'
    break
    default: resultado = "Operação invalida"   
} document.write ('Resultado:', resultado)
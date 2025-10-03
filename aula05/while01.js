/*ler dois numeros e a operacao até que o usuário informe a saída+ alt shift e seta pra baixo você copia e automaticamente joga pra baixo
além de que ao utilizarmos ctrl + shift + l podemos selecionar palavras iguais e apagá-las e substitui-las*/
let continua = 's';
let num1, num2;
let operacao;
while (continua == 's') {
    num1 = parseInt(prompt('Informe o primeiro número'));
    num2 = parseInt(prompt('Informe o segundo número'));
    operacao = prompt('operacao <+,-,*,/>');
    if (operacao == '+'){alert('Resultado:'+ (num1 + num2));}
    else if (operacao == '-') { alert('Resultado: '+ (num1 - num2));}
    else if (operacao == '*') { alert('Resultado: '+ (num1 * num2));}
    else if (operacao == '/') { alert('Resultado: '+ (num1 / num2));}
    else (console.log('operacao inválida'));       
    continua = prompt('Deseja permanecer no programa? <s/n>') 
}
alert('Programa encerrado');
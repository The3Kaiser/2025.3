/*faça um programa para ler um valor e mostrar e contar a tabela de multiplicação deste valor de 1 até 10*/
let count = 1;
let num = parseInt(prompt('Digite o número'))
while (count<='10') {
    document.write(num + ' x '+count+' = '+ num*count+ '<br>')
    count++;
}
    
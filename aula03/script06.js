let nota1 = parseFloat(prompt('Nota 1:'));
let nota2 = parseFloat(prompt('Nota 2:'));
let media = (nota1 + nota2) / 2;
if(media >= 6){
    document.write('Aluno aprovado')
} else {
    document.write('Aluno reprovado.')
}
let salario = parseFloat(prompt('Informe o salário'));
let vt = salario *0.06;
let inss;
if (salario < 2500){
    inss = salario * 0.08;
} else {
    inss = salario *0.11;
}
document.write('Desconto do vt: ', vt);
document.writek('Desconto do Inss: ',inss);
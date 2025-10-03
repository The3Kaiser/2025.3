/*identificar  a categoria de um produto pelo código
1 - alimento perecivel
2 - bebida
3 - limpeza
4 - higiene pessoal */
let categoria = parseInt('Digite a categoria do numero 1 a 4')
switch (categoria){
    case 1:
    document.write('Alimento perecivel');
    break
    case 2:
        document.write('Bebida');
    break
    case 3:
        document.write('Limpeza');
    break
    case 4:
        document.write('Higiene pessoal');
    default: categoria = "Categoria invalida";
}
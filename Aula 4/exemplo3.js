//suposição: um estoque com codigo de categoria
// categoria 0 = bebida
//categoria 1 = perecivel
//categorial 2 = ração
//categoria 3 = limpeza
let categoria = 3;
switch (categoria){
    case 0:
        document.write('Bebida');
    break
    case 1:
        document.write('Perecivel')
    break
    case 2:
        document.write('Ração');
    break
    case 3:
        document.write('Limpeza');
    break
    default:
        document.write('categoria não encontrada')
    break
}
/*testando com if
if(categoria = 0){
    console.log('bebida');
} else if(categoria = 1){
    console.log('perecivel');
} elseif (categoria = 2)
    console.log('ração');
} elseif (categoria 3 = limpeza);
    console.log('Limpeza');
*/

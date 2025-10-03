
let idade = Number(prompt('Informe a idade'));
if (idade<16){
    document.write('Não pode votar');
} else if (idade<18)
    document.write('Voto opcional');
    else {
        console.log('Voto obrigatorio');
}

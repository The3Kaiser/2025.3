//idade de eleitor
//menor de 16 não pode votar
//16 e 17 anos, eleitor opcional
//18 eleitor obrigatorio

let idade = Number(prompt('Informe a idade'));
if (idade<16){
    document.write('Não pode votar');
} else if (idade<18)
    document.write('Voto opcional');
    else {
        console.log('Voto obrigatorio');
}

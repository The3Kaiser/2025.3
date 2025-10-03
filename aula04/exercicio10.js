//Verifique se a pessoa pode votar.
let idade = Number(prompt('Informe a idade'));
if (idade<16){
    document.write('Não pode votar e nem dirigir.');
} else if (idade<18)
    document.write('Pode votar mas não pode dirigir.');
    else {
        console.log('Pode votar e também pode dirigir.');
}


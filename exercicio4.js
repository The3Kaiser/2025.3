let idade = parseInt(prompt('Digite sua idade'))
if(idade < 12){
    document.write('Criança');
} else if (idade < 18){
    document.write('Adolescente')
} else if(idade < 60){
    document.write('Adulto');
} else{
    document.write('Idoso');
}
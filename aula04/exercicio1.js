/*verificar o dia da semana:crie um programa que receba um numero de 1 a 7 e retorne o dia correspodente da semana. Por exemplo, 1 para "Domingo", 2 para "Segunda-Feira"
e assim por diante.*/
let dsn = parseInt(prompt('Digite um número de 1 a 7'));
switch (dsn){
    case 1:
        alert('Domingo');
        break
    case 2:
        alert('Segunda-Feira');
    break
    case 3:
        alert('Terça-Feira');
    break
    case 4:
        alert('Quarta-Feira');
    break
    case 5:
        alert('Quinta-Feira');
    break
    case 6: 
        alert('Sexta-Feira');
    break
    case 7:
        alert('Sábado');
}
let ts = parseInt(prompt('Digite o tempo de serviço em meses:'));
let tcg = parseInt(prompt('Digite o tempo no cargo aual em meses:'));
if (ts > 12 && tcg >= 6){
    document.write('Você está apto para tirar férias.')
} else{
    document.write('Você não está apto para tirar férias, trabalhe mais.')
}
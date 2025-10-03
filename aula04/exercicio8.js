//verificar se uma pessoa pode comprar bebida alcoolica
let idade = parseInt(prompt('Digite sua idade '))
let acompanhado = prompt('Está acompanhado? sim/não')
if (idade >= 18 , (idade >= 16 && idade < 18 && acompanhado.toLowerCase() === 'sim')){
    document.write('Pode comprar bebidas.')
} else{
    document.write('Não pode comprar bebidas.')
}
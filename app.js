alert('Boas vindas ao jogo do número secreto!')

let numeroSecreto = 15
console.log(`O número secreto é ${numeroSecreto}`)

let chute = prompt('Escolha um número entre 1 e 30')

if (numeroSecreto == chute) {
    alert(`Você descobriu o número secreto ${numeroSecreto}!`)
} else {
    alert('Você errou! :(')
}


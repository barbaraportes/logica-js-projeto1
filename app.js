alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 15;
console.log(`O número secreto é ${numeroSecreto}`);

let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');

    if (chute == numeroSecreto) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas ++
       
    }
}




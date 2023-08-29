alert('Boas vindas ao jogo do número secreto!');

let numeroMaximo = 10;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

/*
    parseInt pega apenas a parte inteira do valor
    Math.random() gera um número pseudo aleatório entre 0 e 1
    * 100 para ter 3 digitos
    + 1 para chegar ao 10 e ao 100 e etc
*/



let chute;
let tentativas = 1;

//enquanto chute não for igual ao número secreto...
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas ++
       
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


/* 
      - O código abaixo tem o mesmo resultado que o código acima (operador ternário) -

if (tentativas > 1) {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}
*/

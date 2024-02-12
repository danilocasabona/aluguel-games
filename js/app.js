let jogosAlugados = 0;

function qtdJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Implementa uma confirmação de devolução:
        if (confirm(`Deseja realmente devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
        }

        qtdJogosAlugados();
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    qtdJogosAlugados();
});


// No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
// Crie um programa que verifica se uma palavra ou frase é um palíndromo.
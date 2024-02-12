function palindromo () {
    let palavra = 'arvore'
    let separandoLetras = palavra.split('');
    let inverso = separandoLetras.reverse();
    let junto = inverso.join('');

    if (palavra == junto) {
        console.log('É palindromo');
    } else {
        console.log('Não é palindromo');
    }
}
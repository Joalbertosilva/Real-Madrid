

function noticias() {
    let noticia = document.querySelector(".more");
    let mostrarNoticia = document.querySelector(".secundarias");
    let botao = document.querySelector(".more button");
    let svgIcon = botao.querySelector('svg');
    let buttonText = document.getElementById('button-text');

    if (mostrarNoticia.classList.contains('open-secundarias')) {
        mostrarNoticia.classList.remove('open-secundarias');
        buttonText.textContent = '...mais notícias';
    } else {
        mostrarNoticia.classList.add('open-secundarias');
        buttonText.textContent = 'ver menos';
    }
}

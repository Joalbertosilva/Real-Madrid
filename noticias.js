

function noticias() {
    let noticia = document.querySelector(".more");
    let mostrarNoticia = document.querySelector(".secundarias");
    let botao = document.querySelector(".more button");

    if (mostrarNoticia.classList.contains('open-secundarias')) {
        // Se a classe 'open-secundarias' estiver presente, significa que as notícias secundárias estão sendo exibidas
        mostrarNoticia.classList.remove('open-secundarias');
        botao.textContent = 'Ver mais'; // Altera o texto do botão para "Ver mais"
    } else {
        // Se a classe 'open-secundarias' não estiver presente, significa que as notícias secundárias não estão sendo exibidas
        mostrarNoticia.classList.add('open-secundarias');
        botao.textContent = 'Ver menos'; // Altera o texto do botão para "Ver menos"
    }
}
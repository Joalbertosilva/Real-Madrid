

function noticias() {
    let noticia = document.querySelector(".more");
    let mostrarNoticia = document.querySelector(".secundarias");
    let botao = document.querySelector(".more button");
    let svgIcon = botao.querySelector('svg');
    let buttonText = document.getElementById('button-text');

    if (mostrarNoticia.classList.contains('open-secundarias')) {
        mostrarNoticia.classList.remove('open-secundarias');
        svgIcon.innerHTML = `
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        `;
        buttonText.textContent = 'Mais notícias';
    } else {
        mostrarNoticia.classList.add('open-secundarias');
        svgIcon.innerHTML = `
        <path fill-rule="evenodd" d="M1.646 9.354a.5.5 0 0 1 .708 0L8 3.707l5.646 5.647a.5.5 0 0 1-.708.708L8 4.707l-5.646 5.647a.5.5 0 0 1-.708-.708"/>
        <path fill-rule="evenodd" d="M1.646 5.354a.5.5 0 0 1 .708 0L8 0.707l5.646 5.647a.5.5 0 0 1-.708.708L8 1.707l-5.646 5.647a.5.5 0 0 1-.708-.708"/>
    `;
        buttonText.textContent = 'Ver menos';
    }
}

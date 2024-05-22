

function menuShow() {
    let menu = document.querySelector('.menu-second');
    let icon = document.querySelector('.icon');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 500); // O tempo deve corresponder ao tempo de transição
        icon.src = 'imgPatrocinioApps/imagem-menu-hamburguer.png';
        icon.classList.remove('rotate');
    } else {
        menu.style.display = 'block';
        setTimeout(() => {
            menu.classList.add('open');
        }, 10); // Pequeno atraso para permitir que o CSS reconheça a mudança de display
        icon.src = 'imgPatrocinioApps/imagem-close-menu2.png';
        icon.classList.add('rotate');
    }
}

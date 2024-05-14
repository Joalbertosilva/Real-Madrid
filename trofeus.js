
function maisTrofeus() {
    let trofeus = document.querySelector(".gerais-responsivo");
    let mostrarTrofeus = document.querySelector(".outros-trofeus");
    if (trofeus.classList.contains('open-trofeus')) {
        trofeus.classList.remove('open-trofeus');
        mostrarTrofeus.classList.remove('open-trofeus');
        document.querySelector('.icon2').src = 'imgPatrocinioApps/imagem-seta-baixo.png';
    } else {
        trofeus.classList.add('open-trofeus');
        mostrarTrofeus.classList.add('open-trofeus');
        document.querySelector('.icon2').src = 'imgPatrocinioApps/imagem-seta-cima.png';
    }   
}
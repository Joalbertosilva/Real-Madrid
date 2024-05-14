

function mostrarPatrocinadores(){
    let mostrarTodosPatrocinadores = document.querySelector(".patrocinadoresSecundarios");
    
    if(mostrarTodosPatrocinadores.classList.contains('open-patrocinadores')){
        mostrarTodosPatrocinadores.classList.remove('open-patrocinadores');
        document.querySelector('.icon3').src = 'imgPatrocinioApps/imagem-seta-baixo.png';
    } else {
        mostrarTodosPatrocinadores.classList.add('open-patrocinadores');
        document.querySelector('.icon3').src = 'imgPatrocinioApps/imagem-seta-cima.png';
    }
}
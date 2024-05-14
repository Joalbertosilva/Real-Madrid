

function menuShow(){
    let menu = document.querySelector('.menu-second');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector('.icon').src = 'imgPatrocinioApps/imagem-menu-hamburguer.png';
    } else{
        menu.classList.add('open');
        document.querySelector('.icon').src = 'imgPatrocinioApps/imagem-close-menu2.png' ;
    }
}
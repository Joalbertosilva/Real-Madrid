

let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    mostrarJogos();
}, 4000);

function mostrarJogos() {
    count++;
    if (count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

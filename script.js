let timer;


function iniciar(){
    timer = setInterval(mostrar_relogio, 1000); //Funcao propria do JS que dispara uma funcao em X milisegundos, nesse caso, 1000ms
}
function pausar(){
    clearInterval(timer);
}

function mostrar_relogio(){
    let d = new Date();
    
    let horas = d.getHours();
    let minutos = d.getMinutes();
    let segundos = d.getSeconds();

    document.querySelector('.relogio').innerHTML = ''+horas+':'+minutos+':'+segundos;

}
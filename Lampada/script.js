/**
 * JS - Aula: 5 - Jogo da Lampada
 * @author: Yanick Santos
 */

function Ligar(){
    document.getElementById("lampada").src="img/on.jpg"
}

function Desligar(){
    document.getElementById("lampada").src="img/off.jpg"
}

function Piscar(){
    var intervalo =0;
    var cont = 0;
    while (cont < 10){
        intervalo +=300;
        setTimeout("document.getElementById('lampada').src='img/on.jpg';", intervalo);
        intervalo +=300;
        setTimeout("document.getElementById('lampada').src='img/off.jpg';", intervalo)
        cont++;
    }
}
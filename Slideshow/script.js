/**
 * JS - Aula: 8 - Simples Slide Show
 * @author: Yanick Santos
 */


function slide1(){
    document.getElementById("banner").src="img/banner1.jpg";
    setTimeout("slide2()", 3000);
}

function slide2(){
    document.getElementById("banner").src="img/banner2.jpg";
    setTimeout("slide3()", 3000);
}

function slide3(){
    document.getElementById("banner").src="img/banner3.jpg";
    setTimeout("slide1()", 3000);
}
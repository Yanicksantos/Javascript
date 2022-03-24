/**
 * JS - Aula: 9 - Jogo Jokenpo
 * @author: Yanick Santos
 */


function Jogar(){
    if(document.getElementById("pedra").checked == false &&
    document.getElementById("papel").checked == false &&
    document.getElementById("tesoura").checked == false ){
        alert("Selecione uma opção")
    }else{
        var sorteio = Math.floor(Math.random()*3);
        switch(sorteio){
            case 0: 
                document.getElementById("pc").src="img/pcpedra.png"
                break;
            case 1:
                document.getElementById("pc").src="img/pcpapel.png"
                break;
            default:
                document.getElementById("pc").src="img/pctesoura.png"
                break;
        }
        if((document.getElementById("pedra").checked && sorteio==0)||
        (document.getElementById("papel").checked && sorteio==1)||
        (document.getElementById("tesoura").checked && sorteio==2)){
            document.getElementById("placar").innerHTML="EMPATE";
        }
        else if((document.getElementById("pedra").checked && sorteio==2)||
        (document.getElementById("papel").checked && sorteio==0)||
        (document.getElementById("tesoura").checked && sorteio==1)){
            document.getElementById("placar").innerHTML="VOCÊ VENCEU";
        }else{
            document.getElementById("placar").innerHTML="COMPUTADOR VENCEU"
        }
    }
}




function Resetar(){
    document.getElementById("pc").src="img/pc.png";
    document.getElementById("placar").innerHTML="";
}
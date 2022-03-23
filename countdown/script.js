/**
 * JS -Aula: 9 - Countdown
 * @author: Yanick Santos
 */
var cont = 10;
var check = true;

function xequeMate(){
    if (check == true){
        
        var timer1 = setInterval(function(){start()}, 1000);
        var timer2 =setTimeout(function(){end()}, 13200)



        function start(){
            soundBeep();
            document.getElementById("time").innerHTML=cont;

            if(cont==0){
                clearInterval(timer1)
                soundThunder()
                document.getElementById("fire").src="gif/explosion.gif"
                document.getElementById("time").innerHTML="GAME OVER"

            }
            cont--;
        }
        check = false;
    }
}



function soundBeep(){
    var beep = new Audio()
    beep.src="music/aulas_countdown_Beep_Short.mp3"
    beep.play()
}


function soundThunder(){
    var beep = new Audio()
    beep.src="music/aulas_countdown_Thunder_Crack.mp3"
    beep.play()
}

function end(){
    document.getElementById("fire").src="img/clean.png"
}
/**
 * JS - Aula: 6 - Jogo do Dado
 * @author: Yanick Santos
 */

function Tabuada(){
    var valor= parseInt(frmtabuada.valor.value);
    for (var i=1; i<=10; i++ ){
        document.write(valor + " x "+ i +" = "+  (valor*i) +"<br>")
    }
}

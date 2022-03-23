/**
 * JS - Aula: 5 - Calculadora Flex
 * @author: Yanick Santos
 */

function Calcular() {
    var etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    var gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("status").src="img/etanol.png";
    }
    else{
        document.getElementById("status").src="img/gasolina.png";
    }
}
function Limpar(){
    document.getElementById("status").src="img/neutro.png";
}
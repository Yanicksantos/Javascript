let totalslider = document.querySelectorAll(".slider-item").length

document.querySelector(".slider-width").style.width=
`calc(100vw * ${totalslider}px)`
let currentSlide =0;
function updateMargem(){
    let newMargem = (currentSlide*document.body.clientWidth)
    document.querySelector(".slider-item").style.Margem = 
    `${newMargem}px`
}

function goPrev(){
    currentSlide--;
    if(currentSlide<0){
        currentSlide = totalslider - 1;
    }
    updateMargem();
}
function goNext(){
    currentSlide++;
    if(currentSlide> totalslider-1){
        currentSlide =0;
    }
    updateMargem();
}
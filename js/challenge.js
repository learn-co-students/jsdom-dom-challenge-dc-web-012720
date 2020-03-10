document.addEventListener("DOMContentLoaded", pageSetup)

function pageSetup() {
    let minus = getMinus();
    let plus = getPlus();
    let heart = getHeart();
    let pause = getPause();

    minus.addEventListener("click", decreaseCounter)
    plus.addEventListener("click", increaseCounter);
    heart.addEventListener("click", likeFunc);
    pause.addEventListener("click", pauseFunc);

}

function getMinus() {
   return document.getElementById('minus')
}

function getPlus() {
   return document.getElementById('plus')
}

function getHeart() {
   return document.getElementById('heart')
}

function getPause() {
   return document.getElementById('pause')
}

function getCounter() {
    return document.getElementById('counter')
}

function decreaseCounter() {
    count = getCounter();
    count.innerText = (parseInt(count.innerText)- 1).toString()
}

function increaseCounter() {
    count = getCounter();
    count.innerText = (parseInt(count.innerText)+ 1).toString() ;
}

function likeFunc() {
    console.log("like")
}

function pauseFunc() {
    console.log("pause")
}

setInterval(increaseCounter,1000 )

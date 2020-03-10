document.addEventListener("DOMContentLoaded", pageSetup)

function pageSetup() {
    let minus = getMinus();
    let plus = getPlus();
    let heart = getHeart();
    let pause = getPause();

    minus.addEventListener("click", decreaseCounter)
    plus.addEventListener("click", increaseCounter);
    heart.addEventListener("click", likeFunc);
    pause.addEventListener("click", puaseFunc);

}   

function getMinus() {
    document.getElementById('minus')
}

function getPlus() {
    document.getElementById('plus')
}

function getHeart() {
    document.getElementById('heart')
}

function getPause() {
    document.getElementById('pause')
}
window.addEventListener("load", init);
function ID(elem) {
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem)
}

function Class(elem){
    return document.getElementsByClassName(elem)
}

function init() {
    sakktable();
    szinezes();
}

function sakktable() {
    var txt = '';

    for (let i = 0; i < 64; i++) {
        txt += "<div></div>"
    }
    ID("jatek").innerHTML = txt;
}

function szinezes(){
    var elemtomb = $("#jatek div")
    for (let index = 0; index < 64; index++) {
        var sor = Math.floor(index / 8);
        console.log(sor);
        if (sor % 2 === 0) {
            if(index % 2 === 0){
                elemtomb[index].style.backgroundColor = "black";
            }
        }
        else{
            if(index % 2 === 1){
                elemtomb[index].style.backgroundColor = "black";
            }
        }
    }
}
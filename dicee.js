var random1;
var random2;

var dice1 = document.getElementById("img1")
var dice2 = document.getElementById("img2")
var dice3 = document.getElementById("img3")
var dice4 = document.getElementById("img4")
var dice5 = document.getElementById("img5")
var dice6 = document.getElementById("img6")

var dice1V2 = document.getElementById("img1-1")
var dice2V2 = document.getElementById("img2-1")
var dice3V2 = document.getElementById("img3-1")
var dice4V2 = document.getElementById("img4-1")
var dice5V2 = document.getElementById("img5-1")
var dice6V2 = document.getElementById("img6-1")

function rollDice(){
    random1 = Math.ceil(Math.random() * 6);
    random2 = Math.floor(Math.random() * 6);
    result1();
    result2();
}

function result1(){
    if (random1 == 1){
        dice1.style.width="160px";
    }
    if (random1 == 2){
        dice2.style.width="160px";
    }
    if (random1 == 3){
        dice3.style.width="160px";
    }
    if (random1 == 4){
        dice4.style.width="160px";
    }
    if (random1 == 5){
        dice5.style.width="160px";
    }
    if (random1 == 6){
        dice6.style.width="160px";
    }
}
function result2(){
    if (random2 == 1){
        dice1V2.style.width="160px";
    }
    if (random2 == 2){
        dice2V2.style.width="160px";
    }
    if (random2 == 3){
        dice3V2.style.width="160px";
    }
    if (random2 == 4){
        dice4V2.style.width="160px";
    }
    if (random2 == 5){
        dice5V2.style.width="160px";
    }
    if (random2 == 6){
        dice6V2.style.width="160px";
    }
}

rollDice();

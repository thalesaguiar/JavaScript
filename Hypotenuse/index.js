
let hypotenuse;
let cathetusA;
let cathetusB;

document.getElementById("submitButton").onclick = function(){
    cathetusA = document.getElementById("aTextBox").value;
    cathetusA = Number(cathetusA);

    cathetusB = document.getElementById("bTextBox").value;
    cathetusB = Number(cathetusB);

    hypotenuse = Math.sqrt(Math.pow(cathetusA,2) + Math.pow(cathetusB,2))

    document.getElementById("cLabel").innerHTML = "Side C: " + hypotenuse;

}

let counter = 0;

document.getElementById("decreaseBtn").onclick = function(){
    counter -= 1;
    document.getElementById("countLabel").innerHTML = counter;
}

document.getElementById("resetBtn").onclick = function(){
    counter = 0;
    document.getElementById("countLabel").innerHTML = counter;
}

document.getElementById("increaseBtn").onclick = function(){
    counter+= 1;
    document.getElementById("countLabel").innerHTML = counter;
}


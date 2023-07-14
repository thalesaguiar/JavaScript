
let hypotenuse;
let cathetusA;
let cathetusB;

//document.getElementById pick the value in  to d

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


let fullName = window.prompt("Digite seu nome");
let firstName;
let lastName;

firstName = fullName.slice(0,fullName.indexOf(" ")+ 1); //Primeiro esse metódo slice pega o primeiro espaço a partir do primeiro caractere, e tudo que está antes desse caractere é atribuido a firstName.

lastName = fullName.slice(fullName.indexOf(" ")+ 1); //Nesse caso ometódo slice pega tudo que esta após o espaço + 1 posição e atribui a lastName.

console.log(firstName);
console.log(lastName);
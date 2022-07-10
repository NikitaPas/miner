let inputName = document.getElementById("name")
let inputBalance = document.getElementById("balance");

let name = document.getElementById("name__game");
let balance = document.getElementById("balance__game");

var hideLogin = document.getElementsByClassName("container");
var showGame = document.getElementsByClassName("container__game");

document.getElementById("submit").addEventListener("click", (e) =>{
    e.preventDefault();
    name.textContent = "Name: " + inputName.value;
    balance.textContent = "Balance: " + inputBalance.value;
    for(var i = 0; i < hideLogin.length; i++){
        hideLogin[i].style.display = "none";
    }
    for(var j = 0; j < showGame.length; j++){
        showGame[j].style.display = "block";
    }
})
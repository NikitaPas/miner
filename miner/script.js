let inputName = document.getElementById("name")
let inputBalance = document.getElementById("balance");

let bal;

let name = document.getElementById("name__game");
let balance = document.getElementById("balance__game");

var hideLogin = document.getElementsByClassName("container");
var showGame = document.getElementsByClassName("container__game");

console.log(hideLogin);
document.getElementById("submit").addEventListener("click", (e) =>{
    e.preventDefault();
    bal = inputBalance.value;
    name.textContent = "Name: " + inputName.value;
    balance.textContent = "Balance: " + inputBalance.value;
    for(var i = 0; i < hideLogin.length; i++){
        hideLogin[i].style.display = "none";
    }
    for(var j = 0; j < showGame.length; j++){
        showGame[j].style.display = "block";
    }
})

let arrGame = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

var matrix = document.getElementsByClassName("block");
shuffle(arrGame);
for(var b = 0; b < matrix.length; b++){
    matrix[b].textContent = arrGame[b];
    
}
console.log(arrGame);
console.log(matrix);

document.querySelector('.blocks').addEventListener('click', e => {
    // e.target - целевой элемент
    let content = e.target.innerHTML;
    
    console.info(`Содержимое элемента: "${content}"!`);
    if(content == "1"){
        console.log("yes")
    }
    else{
        console.log("no")
        content.textContent = "5";
        e.target.textContent = "BOMB";
        e.target.style.color = "white";
    }
  });
// list down all the winning combinations

let winningCombinations = [
  [1, 2, 3], //vertical
  [4, 5, 6], //vertical
  [7, 8, 9], //vertical
  [1, 4, 7], //horizontal
  [2, 5, 8], //horizontal
  [3, 6, 9], //horizontal
  [1, 5, 9], //diagonal
  [3, 5, 7], //diagonal
];

//accessing all boxes

let boxelement = document.querySelectorAll(".box");

//providing event listener to all the boxes

for (elem of boxelement) {
  elem.addEventListener("click", handleClick);
}

let click = 0;
isWon = false;
let xAttempts = [];
let oAttempts = [];

function handleClick(event) {
  console.log(event.target.id);
  let pTag = document.createElement("p");
  pTag.style.color = "#FAB201";
  let id = event.target.id;
  boxelement[id - 1].appendChild(pTag);

  if (click % 2 == 0) {
    pTag.textContent = "X";
    click++;
    xAttempts.push(parseInt(id));
    console.log(xAttempts);
    result(xAttempts, "X");
  } else {
    pTag.textContent = "O";
    click++;
    oAttempts.push(parseInt(id));
    console.log(oAttempts);
    result(oAttempts, "O");
  }
}

console.log("click",click)

let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")
function result(playerArray,player){
    console.log(player,playerArray)
    
    for (let i=0; i<winningCombinations.length; i++){
        console.log(winningCombinations[i]);
        let check = true;
        for (let j=0; j<winningCombinations[i].length;j++){
            if (playerArray.includes(winningCombinations[i][j])==false){
                check = false;
                break;
            }            
        }
        if (check==true){
            isWon=true;
            resultBox.style.visibility = "visible";
            messageBox.textContent = `"${player}"` + " Won the match";
            console.log(player, " won the match");
        }
        
    }
    if (click ==9 && isWon == false){
        
        resultBox.style.visibility = "visible";
        messageBox.textContent = "It's a Draw."
    }
}

let playbtn = document.getElementById("button")

playbtn.onclick=()=>{
    history.go(0);
}
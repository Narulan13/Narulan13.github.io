let cells = document.querySelectorAll('.cell');

const winningconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
let cl = document.getElementsByClassName("closef");
let cr = document.getElementsByClassName("circle");
let UsedCells = {
    used : [],
    count : 0
} 
let p1 = {
    symbol: '<i class="fa fa-close"></i>',
    played: [],
    score: 0,
};

let p2 = {
    symbol: '<i class="fa fa-circle-o"></i>',
    played: [],
    score: 0,
};
let d = 0;
let counter = 0;
let current = p1.symbol;
let turned = current;
document.getElementById("closef").innerHTML=p1.symbol;
for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', () => {
        if(turned === current && current === p1.symbol){
            document.getElementById("closef").innerHTML = p2.symbol;
            turned = p2.symbol;
        } else if(turned === p2.symbol){
            document.getElementById("closef").innerHTML = p1.symbol;
            turned = p1.symbol;
        }
            if (current === p1.symbol) {
                addSymbol(i, p1);
                if (win(p1)) {
                    openmodal(p1);
                    p1.score += 1;
                    document.getElementById("pl1").innerHTML= p1.score;
                    resetGame();
                } else {
                    if(UsedCells.count===9){
                        let ddd = 1;
                        openmodal(ddd);
                        d += 1;
                        document.getElementById("draw").innerHTML = d;
                        resetGame();
                    }
                    changeTurn();
                }
            } else {
                addSymbol(i, p2);
                if (win(p2)) {
                    openmodal(p2);
                    p2.score += 1;
                    document.getElementById("pl2").innerHTML= p2.score;
                    resetGame();
                } else {
                    if(UsedCells.count===9){
                        let ddd = 1;
                        openmodal(ddd);
                        d += 1;
                        document.getElementById("draw").innerHTML = d;
                    }
                    changeTurn();
                }
            }
    });
}

function changeTurn() {
    current = current === p1.symbol ? p2.symbol : p1.symbol;
}

function addSymbol(i, player) {
    cells[i].innerHTML = player.symbol;
    player.played.push(i);
    UsedCells.used.push(player.played);
    counter+=1;
    UsedCells.count = counter;
    cells[i].style.pointerEvents = 'none';
}

function win(player) {
    return winningconditions.some(cond =>
        cond.every(index => player.played.includes(index))
    );
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
    });
    p1.played = [];
    p2.played = [];
    UsedCells.used = [];
    UsedCells.count = 0;
    counter = 0;  
    current = p1.symbol; 
    turned = p1.symbol;
    document.getElementById("closef").innerHTML = p1.symbol
}


function openmodal(p) {
    modal.style.display = "block";
    if(p===p1)
    {
        document.getElementById("ok").innerHTML = "Player 1 Won!";
    }  
    else if(p===p2) {
        document.getElementById("ok").innerHTML = "Player 2 Won!";
    }  
    else if(p===1){
        document.getElementById("ok").innerHTML = "Draw!";
    }
}

function Close(){
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

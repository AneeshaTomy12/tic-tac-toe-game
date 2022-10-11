boxes = document.querySelectorAll("#box div"), X_or_O = 0;
var turn = document.getElementById("player");
const winnerWindow = document.querySelector('.winnerWindow');
const winnerName = document.querySelector('.winnerName');

// Displaying winner
function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    winnerWindow.classList.add('winnerWindowShow');
    turn.innerHTML = "Game is over!";
    turn.style.color = "red";
    winnerName.innerHTML = "Player " + b1.innerHTML;
    turn.style.fontSize = "40px";
    winnerName.fontSize = "42px";
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("disableclick");
        boxes[i].style.opacity = 0.2;
    }
}

// Restart button
document.getElementById('restart').addEventListener('click', restart);
function restart() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.opacity = 1;
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Play";
        turn.style.fontSize = "35px";
        turn.style.color = "#f5deb3";
        boxes[i].classList.remove("disableclick");;
    }
    winnerWindow.classList.remove('winnerWindowShow');
}

// Finding winner
function getWinner() {
    var box1 = document.getElementById("row1"),
        box2 = document.getElementById("row2"),
        box3 = document.getElementById("row3"),
        box4 = document.getElementById("row4"),
        box5 = document.getElementById("row5"),
        box6 = document.getElementById("row6"),
        box7 = document.getElementById("row7"),
        box8 = document.getElementById("row8"),
        box9 = document.getElementById("row9");
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);

    else if ((box1.innerHTML == 'X' || box1.innerHTML == 'O') && (box2.innerHTML == 'X' || box2.innerHTML == 'O') && (box3.innerHTML == 'X' || box3.innerHTML == 'O') &&
        (box4.innerHTML == 'X' || box4.innerHTML == 'O') && (box5.innerHTML == 'X' || box5.innerHTML == 'O') && (box6.innerHTML == 'X' || box6.innerHTML == 'O') &&
        (box7.innerHTML == 'X' || box7.innerHTML == 'O') && (box8.innerHTML == 'X' || box8.innerHTML == 'O') && (box9.innerHTML == 'X' || box9.innerHTML == 'O')) {
        turn.innerHTML = "Match Tie";
        turn.style.fontSize = "40px";
        turn.style.color = "red";
    }
}
// X and O turn
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
                this.innerHTML = "X";
                turn.innerHTML = "O Turn Now";
                getWinner();
                X_or_O += 1;
            } else {
                // console.log(X_or_O);
                this.innerHTML = "O";
                turn.innerHTML = "X Turn Now";
                getWinner();
                X_or_O += 1;
            }
        }
    };
}
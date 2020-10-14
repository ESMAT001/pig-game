var scores, activePlayer, number, finalScore, state;
newGame();

document.getElementById("roll").addEventListener("click", () => {
    if (state) {
        var random = Math.ceil(Math.random() * 6);
        var random1 = Math.ceil(Math.random() * 6);
        console.log(random);
        if (random != 6 && random1 != 6) {
            // console.log(random);
            document.getElementById("dice").src = "images/dice-" + random + ".png";
            document.getElementById("dice").style.visibility = "visible";


            document.getElementById("dice1").src = "images/dice-" + random1 + ".png";
            document.getElementById("dice1").style.visibility = "visible";
            //score update
            number += (random + random1);
            document.getElementById("player-" + activePlayer + "-score").textContent = number;
        } else {
            changePlayer();
        }
    }

})

document.getElementById("hold").addEventListener("click", () => {
    if (state) {
        scores[activePlayer] += number;
        document.getElementById("player-" + activePlayer + "-global").textContent = scores[activePlayer];
        //chk for winner
        if (scores[activePlayer] >= finalScore) {
            document.getElementById("player-" + activePlayer).classList.remove("active");
            document.getElementById("player-" + activePlayer).textContent = "WINNER!";
            state = false;
        } else {
            changePlayer();
        }
    }
})
document.getElementById("btn-new").addEventListener("click", () => {
    newGame();
})
document.getElementById("finalScore").addEventListener("focusout", () => {
    if (document.getElementById("finalScore").value !== undefined) {
        finalScore = parseInt(document.getElementById("finalScore").value);
        console.log(document.getElementById("finalScore").value);
    }
})

function newGame() {
    scores = [0, 0];
    activePlayer = 0;
    number = 0;
    finalScore = 100;
    state = true;
    document.getElementById("dice").style.visibility = "hidden";
    document.getElementById("dice1").style.visibility = "hidden";

    document.getElementById("player-0").classList.remove("active");
    document.getElementById("player-1").classList.remove("active");

    document.getElementById("player-0-panel").classList.remove("active-back");
    document.getElementById("player-1-panel").classList.remove("active-back");

    document.getElementById("player-0").classList.add("active");
    document.getElementById("player-0-panel").classList.add("active-back");

    document.getElementById("player-0").textContent = "PLAYER 1";
    document.getElementById("player-1").textContent = "PLAYER 2";

    document.getElementById("player-0-global").textContent = 0;
    document.getElementById("player-1-global").textContent = 0;
    document.getElementById("player-0-score").textContent = 0;
    document.getElementById("player-1-score").textContent = 0;

    document.getElementById("finalScore").value = '';
}

function changePlayer() {
    //change player
    number = 0;
    document.getElementById("player-" + activePlayer + "-score").textContent = number;
    document.getElementById("dice").style.visibility = "hidden";
    document.getElementById("dice1").style.visibility = "hidden";
    document.getElementById("player-" + activePlayer).classList.remove("active");
    document.getElementById("player-" + activePlayer + "-panel").classList.remove("active-back");
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById("player-" + activePlayer).classList.add("active");
    document.getElementById("player-" + activePlayer + "-panel").classList.add("active-back");
}
//id="player-0-panel"
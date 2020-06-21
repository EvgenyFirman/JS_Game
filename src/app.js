var scores,roundScore,activePlayer,gamePlaying;

init();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function(){
    if(gamePlaying){
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src="dice-" + randomNumber + ".png"

        if (lastDice === 6 && randomNumber === 6){
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
            nextPlayer();

        } else if (randomNumber !== 1){
            roundScore += randomNumber;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else {
        nextPlayer();
        }
        lastDice = randomNumber;
    } 
});

document.querySelector(".btn-hold").addEventListener("click", function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    //Check for win player
    if (scores[activePlayer] >= 10){
        document.querySelector("#name-"+ activePlayer).textContent = "Winner!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
        
        }else{
        nextPlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener("click", init);

function init(){
    gamePlaying = true

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

document.getElementById("score-0").textContent = 0; 
document.getElementById("score-1").textContent = 0; 
document.getElementById("current-0").textContent = 0; 
document.getElementById("current-1").textContent = 0; 

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

document.querySelector(".dice").style.display = "none";


}

function nextPlayer(){
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0
    roundScore = 0;
    document.querySelector("#current-0").textContent = "0";
    document.querySelector("#current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
    document.querySelector(".dice").style.display = "none";
}


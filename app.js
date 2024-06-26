
// ---------- ROCK PAPER SCISSORS GAME ----------
const choice = ["rock","paper","scissors"];
const playersChoice = document.querySelectorAll(".choices button"); 
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

playersChoice.forEach((option) => {

    option.addEventListener("click", () => {
        
        const playerChoice = option.className;
    
        const computerChoice = choice[Math.floor(Math.random() * 3)];
        let result = "";
    
        if(playerChoice === computerChoice) {
            result = "IT'S A TIE!";
        }
        
        else {
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
    
                case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
    
                case "scissors":
                    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
        }
        
        resultDisplay.classList.remove("greenText", "redText");
    
        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = `${result}`;
    
        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("greenText",);
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            break;
    
            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            break;
        }});
    
});
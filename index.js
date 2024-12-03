/*
PSEUDOCODE:
Output Explain the rules to the player
Output Begin round: round numbere
create player score count and computer score count
while player or computer has less than 5 score:
    Decide randomly what computer plays
    Ask user for input (preferrably choice not type-out)
    If player played scissors then:
        If computer played scissors:
            Output a tie
            new round, no score change
        If computer played rock:
            Output lose
            computer gets +1 to score
        If computer played paper:
            Output win
            player gets +1 to score
    Repeat likewise for player playing rock or paper
    output player and computer score
If player wins: output congrats you won
If computer wins; output womp-womp you lose
*/



let player_score = 0
let computer_score = 0

const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const loseOrWin = document.querySelector("#winOrLose")


    //Choose randomly what computer will play
    function getComputerChoice() {
        const random_int = Math.floor(Math.random()*3)
        console.log(random_int)
        const choices = ["rock", "paper", "scissors"]
        return choices[random_int]
    }


    //User input
    const buttonsDiv = document.querySelector("#buttons");

      buttonsDiv.addEventListener("click", (event) => {
        let computerChoice = getComputerChoice()
        let clickedEvent = event.target
        let userChoice = undefined

        switch(clickedEvent.id) {
          case "rock":
            userChoice = "rock"
            break
          case "paper":
            userChoice = "paper"
            break
          case "scissors":
            userChoice = "scissors"
            break
        }

        //Calculate who won
        function displayWin() {loseOrWin.textContent = "Congrats, you won this round!"; player_score += 1;}
        function displayLose() {loseOrWin.textContent = "Oh no, you lost this round!"; computer_score += 1;}
        switch(userChoice) {
            case "scissors":
                if (computerChoice == "rock") {displayLose()}
                else if (computerChoice == "paper") {displayWin()}
                else {loseOrWin.textContent = "It's a tie!"}
                break
            case "rock":
                if (computerChoice == "paper") {displayLose()}
                else if (computerChoice == "scissors") {displayWin()}
                else {loseOrWin.textContent = "It's a tie!"}
                break
            case "paper":
                if (computerChoice == "scissors") {displayLose()}
                else if (computerChoice == "rock") {displayWin()}
                else {loseOrWin.textContent = "It's a tie!"}
                break
            default:
                loseOrWin.textContent = "Are you sure that you wrote your answer correctly?"
                break
        }

        playerScore.textContent = "Your score: " + player_score
        computerScore.textContent = "Computer score: " + computer_score
        if (player_score == 5) {
            loseOrWin.textContent = "YOu won!!!!";
            buttonsDiv.remove()
        }
        else if (computer_score == 5) {
            loseOrWin.textContent = "You lost :("
            buttonsDiv.remove()
        }
      })

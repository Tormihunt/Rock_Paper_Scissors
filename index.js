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

alert("Hi! You are playing rock-paper-scissors. The rules are simple:")
alert("If you play rock and the opponent plays scissors you win. However if the opponent plays paper you would lose and in case of a the opponent also playing a rock it would be a tie!")
alert("It's best of 5 and rock beats scissors, scissors beat paper and paper beats rock. Lets begin!")
let player_score = 0
let computer_score = 0

while (player_score < 5 && computer_score < 5) {

    //Choose randomly for opponent
    random_int = Math.floor(Math.random()*3)
    console.log(random_int)
    const choices = ["Rock", "Paper", "Scissors"]
    let computer_choice = choices[random_int]
    console.log(computer_choice)

    player_score += 1

    }

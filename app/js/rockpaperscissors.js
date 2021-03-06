////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
playToFive();
function getInput()
{
    // console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay()
{
    var randomNumber = Math.random();
    if (randomNumber < 0.33)
    {
        return "rock";
    }
    else if (randomNumber < 0.66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var move = null;
function getPlayerMove(move)
{
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var x;
    if (move)
    {
        x = move;
    }
    else
    {
        x = getInput();
    }


    return x /* Your Expression */ ;
}

function getComputerMove(move)
{
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var x;
    if (move)
    {
        x = move;
    }
    else
    {
        x = randomPlay();
    }
    return x /* Your Expression */ ;
}

function getWinner(playerMove, computerMove)
{
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == computerMove)
    {
        winner = 'tie';
    }
    else if (playerMove == 'rock')
    {
        switch (computerMove)
        {
            case 'paper':
                // Code to be executed if expression === value2
                winner = 'computer'
                break;
            case 'scissors':
                winner = 'player'
                break;
            default:
                winner = 'wrong input'
                // Code to be executed if expression is different from both value1 and value2
        }
    }
    else if (playerMove == 'paper')
    {
        switch (computerMove)
        {
            case 'rock':
                // Code to be executed if expression === value1
                winner = 'player';
                break;
            case 'scissors':
                winner = 'computer'
                break;
            default:
                winner = 'wrong input'
                // Code to be executed if expression is different from both value1 and value2
        }
    }
    else if (playerMove == 'scissors')
    {
        switch (computerMove)
        {
            case 'rock':
                // Code to be executed if expression === value1
                winner = 'computer';
                break;
            case 'paper':
                winner = 'player'
                break;
            default:
                winner = 'wrong input'
                // Code to be executed if expression is different from both value1 and value2
        }
    }
    return winner;
}

function playToFive()
{
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5)
    {
        
        var playerMove = getPlayerMove(move);
        var computerMove = getComputerMove(move);
        var result = getWinner(playerMove,  computerMove);
        if(result == 'player')
        {
            playerWins ++;
            console.log("Player wins!");
            
        }
        else if(result == 'computer')
        {
            computerWins ++;
            console.log("Computer wins!");
        }
        else
        {
            console.log("It's a draw!");
        }

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

    }
    
    
    return [playerWins, computerWins];
}

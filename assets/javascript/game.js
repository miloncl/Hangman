const word  = ["ACDC", "ARCTICMONKEYS", "NIRVANA", "COLDPLAY", "GREENDAY", "OASIS", "PINKFLOYD", "SLIPKNOT"];
var guessedWord;
var lettersGuessed = [];
var displayWord = [];
var guessRemaining = 1;
var wins = 0;
var lose = 0;
var gameOver = false;

function reset() {
    // Use Math.floor to round the random number down to the nearest whole.
    guessedWord = word[Math.floor(Math.random()*word.length)];

    // Clear out arrays
    lettersGuessed = [];
    displayWord = [];

    // Build the guessing word and clear it out
    for(var i = 0; i < guessedWord.length; i++)
    {
        displayWord.push('_');
    }

    // Create Guesses Remaining by checking length of guessedWord 
    guessRemaining = Math.ceil(guessedWord.length * 1.5); 
    gameOver = false;

    //display the values in HTML
    document.getElementById("guesses-remain").innerText = guessRemaining;
    document.getElementById("display-word").innerText = displayWord;
    document.getElementById("total-wins").innerText = wins;
    document.getElementById("total-losses").innerText = lose;
    document.getElementById("letters-guessed").innerText = lettersGuessed;

}

function totalWin()
{
    if(displayWord.indexOf('_') == -1)
    {
        alert("You Win");
        wins++;
        document.getElementById("total-wins").innerText = wins;
        gameOver = true;
        console.log(wins);
    }
}

function totalLose()
{
    if(guessRemaining == 0)
    {
        alert("You Lose");
        lose++;
        document.getElementById("total-losses").innerText = lose;
        gameOver = true;
        console.log(totalLose);
    }
}

document.onkeydown = function(event)
{
    var letter = event.key;

    if(!gameOver)
    {
        if(event.keyCode >= 65 && event.keyCode <= 90) 
        {
            letter = letter.toUpperCase();
            console.log(letter);
            if (lettersGuessed.indexOf(letter) == -1)
            {
                if(guessedWord.includes(letter))
                {
                    for(var j = 0; j < guessedWord.length; j++)
                    {
                        if(guessedWord[j] == letter)
                        {
                            displayWord[j] = letter;
                        }

                        document.getElementById("display-word").innerText = displayWord;
                        console.log(displayWord);
                    }
                }
                else
                {
                    guessRemaining--;
                    document.getElementById("guesses-remain").innerText = guessRemaining;
                }

                lettersGuessed.push(letter);
                document.getElementById("letters-guessed").innerText = lettersGuessed + ", ";

            }
            else
            {
                alert("Letter Already Guessed");
            }
        }
        else 
        {
            alert("Invalid Key");
        }
        totalWin();
        totalLose();
    }
    else
    {
        reset();
    }
}

reset();


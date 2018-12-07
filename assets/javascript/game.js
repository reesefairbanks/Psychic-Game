/* Computer picks a random letter
    User chooses letter by pressing a key
    User's choice is captured in a variable
        User's choice is displayed
    Compare computer and user's choice
        If user's choice is the same as computer's choice, user wins
             User wins increase number
             Alert user wins
             Display wins
             Game over, reset
        Else
            If no more user guesses, game over
                Alert user has lost
                Display losses
                Game over, reset
            Else user picks a new letter and guesses allowed go down
*/ 
var computerChoice;
var userGuess = "";
var wins = 0;
var losses = 0;
var userGuesses = [];
var guessesLeft = 8;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Capture users choice
    document.onkeyup = function(game) {
        var guessing = game.key;
        // Computer picks random letter
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        //console.log("user choice " + guessing);
        //console.log("computer choice " + computerChoice);
        guessesLeft = guessesLeft - 1 
    }
   

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
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var userGuess = "";
var wins = 0;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 9;

// Capture users choice
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(computerChoice);
    // Computer picks random letter
    if (alphabet.indexOf(userGuess) > -1) {

        //Compare user guess to computer guess
        if (userGuess === computerChoice) {
            //Wins increase
            wins++;
            // Computer chooses another letter
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            //Guessed letters resets
            guessedLetters = [];
            //Guesses left resets
            guessesLeft = 9;

            // If guesses do not match, decrease guesses left and show guessedletters
        }
        // If user runs out of guesses
        else if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            guessedLetters = [];
        }
        else {
            guessesLeft--;
            guessedLetters.push(userGuess);
        }


        // Write to HTML to display game score
        var HTML =
            "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Loses: " + losses + "</P>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses: " + guessedLetters + "</p>";

        document.querySelector("#game").innerHTML = HTML;
    }
};


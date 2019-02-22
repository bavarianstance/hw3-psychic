const computerChoices = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, and guesses left.
    let wins = 0;
    let losses = 0;
    let guessesLeft = 10;

    // Create variables that hold references to the places in the HTML where we want to display things.
    let directionsText = document.getElementById("directions-text");
    let userChoiceText = document.getElementById("userchoice-text");
    let computerChoiceText = document.getElementById("computerchoice-text");
    let winsText = document.getElementById("wins-text");
    let lossesText = document.getElementById("losses-text");
    let guessesText = document.getElementById("guesses-text");

// define function to stop game
    function javascript_abort(){
   throw new Error('This is not an error. This is just to abort javascript');
};    

//define reset function
function reset(){
document.location.reload();
    clearInterval(interval);
    };
// This function is run whenever the user presses a key.

    document.onkeyup = function(event) {

      // Determines which key was pressed.
      let userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //game logic, includes game over function

      if (userGuess === computerGuess) {
        wins++;
        guessesLeft--;
      } else {
        losses++;
        guessesLeft--;
      } if (guessesLeft < 0) {
        alert ('Game Over! Press reset button to play again.');
        javascript_abort();
        return;
      }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/guesses left.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guesses left: " + guessesLeft;
      };
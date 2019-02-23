const computerChoices = ["a", "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

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

      //game logic, includes game over function

      if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
             // shows computer guess
        computerChoiceText.textContent = "Nice! Last won guess: " + computerGuess;
        // chooses new number for user to guess
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      } 
      else if (computerChoices.indexOf(userGuess) === -1){
        alert('please only enter alphabet letters')
        return;
      }
      else {
        guessesLeft--;
      } if (guessesLeft < 0) {
        losses++;
        alert ('Game Over! Try again if you are worthy.');
        guessesLeft = 10;
        // javascript_abort();
        // return;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/guesses left.
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesText.textContent = "guesses left: " + guessesLeft;
      };
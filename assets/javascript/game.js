var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesMade = [];
var letterToGuess = null;

var compGuess = letters[Math.floor(Math.random() * letters.length)];


var newGuessesLeft = function() {

  document.querySelector('#remaining').innerHTML = "Guesses left: " + guessesLeft;
};

var newLetterToGuess = function() {
  this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var newGuessesSoFar = function() {

  document.querySelector('#myGuesses').innerHTML = "Your Guesses so far: " + guessesMade.join(', ');
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessesMade = [];

  newLetterToGuess();
  newGuessesLeft();
  newGuessesSoFar();
};

newLetterToGuess();
newGuessesLeft();


document.onkeyup = function(event) {
    guessesLeft--;
  var myLetter = String.fromCharCode(event.keyCode).toLowerCase();

  guessesMade.push(myLetter);
  newGuessesLeft();
  newGuessesSoFar();

        if (guessesLeft > 0){
            if (myLetter == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){

            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            reset();
        }
};

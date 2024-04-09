const myPlayBtn = document.getElementById("play")
 
 myPlayBtn.addEventListener('click', function() {
    console.log("StartNewGame");
      });

      constbuttons = document.getElementsByClassName("control");
      const playerScore = document.getElementById("player-score");
      const dice = document.getElementById("dice");
      const diceValue = document.getElementById("dice-value")
      const computerImage = document.getElementById("computer");
      const messages = document.getElementById("message");
      const choices = ["1", "2", "3", "4", "5", "6"];

      dice.addEventListener("click", rollDice);
// roll Dice and get computers number
      function rollDice() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        diceValue.textContent = randomNumber;
      }

     
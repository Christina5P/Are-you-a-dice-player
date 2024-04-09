const myPlayBtn = document.getElementById("play")
 
 myPlayBtn.addEventListener('click', function() {
    console.log("StartNewGame");
      });

      constbuttons = document.getElementsByClassName("control");
      const playerScore = document.getElementById("player-score");
      const dice = document.getElementById("dice");
      const diceValue = document.getElementById("dice-value");
      const choices = ["1", "2", "3", "4", "5", "6"];
    

      dice.addEventListener("click", rollDice);
// roll Dice and get computers number
      function rollDice() {
        const numberOfRolls = dice.querySelectorAll("span").length;
        const randomNumber = Math.floor(Math.random() * numberofRolls) + 1;
        diceValue.textContent = randomNumber;
               
        message.textContent = "You rolled: " + randomNumber;

        // clear dice from used number
        dice.innerHTML = "";

        for (let i = 0; i < randomNumber; i++) {
          const dot = document.createElement("span");
          dot.classList.add("roll-dot");
          dice.appendChild(dot);
        }
      

         setTimeout(function() {
          diceValue.textContent = randomNumber;
          dice.style.transition = 'none'; 
          dice.style.transform = 'rotateY(0deg)';
        }, 500); 
      }
    
    
    
     
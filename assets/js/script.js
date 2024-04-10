const myPlayBtn = document.getElementById("play")
 
 myPlayBtn.addEventListener('click', function(rolldice) {
    console.log("StartNewGame");
      });

         // This is variables
      constbuttons = document.getElementsByClassName("control");
      const playerScore = document.getElementById("player-score");
      const dice = document.getElementById("dice");
      const diceValue = document.getElementById("dice-value");
      const choices = ["1", "2", "3", "4", "5", "6"];
    

   //   dice.addEventListener("click", rollDice);

// roll Dice and get computers number
      function rolldice() {
        const numberOfRolls = dice.querySelectorAll("span").length;
        const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;
       // update dice with the number
        diceValue.textContent = randomNumber;
               
   console.log("roll dice");

     //change random number to dots
        for (let i = 0; i < randomNumber; i++) {
          const dot = document.createElement("span");
          dot.classList.add("roll");
          dice.appendChild(dot);//to show dot in dice through DOM
        }
        console.log("convert numbers to dots");
      
   // clear dice from used number
   dice.innerHTML = "";

      }
   /* tror inte jag behöver denna
         setTimeout(function() {
          diceValue.textContent = randomNumber;
          dice.style.transition = 'none'; 
          dice.style.transform = 'rotateY(0deg)';
        }, 500); 
      } */
    
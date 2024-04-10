const myPlayBtn = document.getElementById("message");
const playElement = document.getElementById("play");
 
         // This is variables
      const buttons = document.getElementsByClassName("control");
      const playerScore = document.getElementById("player-score");
      const dice = document.getElementById("dice");
      const diceValue = document.getElementById("dice-value");
      const choices = ["1", "2", "3", "4", "5", "6"];
     const numberOfRolls = 6
             
// roll Dice and get computers number
      function rollDice() {
        const numberOfRolls = dice.querySelectorAll("span").length;
        const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;
      console.log ("dice number");

     /*change random number to dots
        for (let i = 0; i < randomNumber; i++) {
        const dot = document.createElement("span");
          dot.classList.add("roll");
        dice.appendChild(dot);//to show dot in dice through DOM         
        }*/

        // update dice with the number                 
      // dice.textContent = dicepatterns(randomNumber);
       console.log("convert numbers to dots");
       
       message.textContent = "dice rolled: ";
      }
      
      
   console.log("roll dice");

   /* tror inte jag behöver denna
         setTimeout(function() {
          diceValue.textContent = randomNumber;
          dice.style.transition = 'none'; 
          dice.style.transform = 'rotateY(0deg)';
        }, 500); 
      } 
    
      const dicePatterns = [
        "",
         "*",
         "* *",
         "*   *",
         "* * *",
         "* *   *"
      ];  
      //convert numbers to dots  
      dice.textContent = dicePatterns [randomNumber]; */
const myPlayBtn = document.getElementById("play");
myPlayBtn.addEventListener('click', function() {
});

const playElement = document.getElementById("message");
 
         // This is variables
     
     
      const playerScore = document.getElementById("player-score");
      const choice = ["1", "2", "3", "4", "5", "6"]; // players choice of number
          
      const buttons = document.querySelectorAll(".control");
      const board = document.getElementById("board");
      
      function changeBoardColor() {
          board.style.backgroundColor = "white";
          board.style.transition = ".5s ease";
      }
      
      buttons.forEach(button => {
          button.addEventListener("click", changeBoardColor);
      });
         function playerchoice() { 
        choice= [i];
        for (i=0;i<els.length;i++) {
        if(els[i].type=='checkbox')
        els[i].checked=!els[i].checked;
        }
        }

     
    
      

     //create the dice
    function createDice(number){     
    const dotPositionMatrix = {
      1: [
        [50, 50]
      ],
      2: [
        [20, 20],
        [80, 80]
      ],
      3: [
        [20, 20],
        [50, 50],
        [80, 80]
      ],
      4: [
        [20, 20],
        [20, 80],
        [80, 20],
        [80, 80]
      ],
      5: [
        [20, 20],
        [20, 80],
        [50, 50],
        [80, 20],
        [80, 80]
      ],
      6: [
        [20, 20],
        [20, 80],
        [50, 20],
        [50, 80],
        [80, 20],
        [80, 80]
      ]
    };
    const dice = document.createElement("div");
      dice.classList.add("dice");

      for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement("span");

        dot.classList.add("dice-container");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);
      }
      return dice;
    }
     // roll Dice with dots from dice-dot

     function rollDice() {
      const diceContainer = document.getElementById('dice-container');
      const diceSpans = diceContainer.querySelectorAll('span');
  
      // Lägg till klassen "roll" för att starta animationssekvensen
      diceSpans.forEach(span => span.classList.add("roll"));
  
      // Efter en viss tid, ta bort klassen "roll" för att avsluta animationssekvensen
      setTimeout(() => {
          diceSpans.forEach(span => span.classList.remove("roll"));
      }, 1000);
      message.textContent = "dice rolled: ";
  }

  /*  
     
      const numberOfRolls = diceSpans.length;
      const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;

     //change random number to dots
     for (let i = 0; i < randomNumber; i++) {
      diceSpans[i].classList.add('dice');
  
     } 
     /* This is an alternative to spans
      const diceContainer = document.getElementById("dice-container");
     diceContainer.innerHTML = ""; // rensa innehåller
     const dice = createDice(6);
      diceContainer.appendChild(dice); */
     console.log("roll dice");

     
    
    
    console.log("message rolled ok");
       
      
   

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
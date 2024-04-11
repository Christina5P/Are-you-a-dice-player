const myPlayBtn = document.getElementById("play");
myPlayBtn.addEventListener('click', function() {
});

const playElement = document.getElementById("message");
 
         // This is variables
      const buttons = document.getElementsByClassName("control");
      const playerScore = document.getElementById("player-score");
      const dice = document.querySelector("dice-dot");
      //const dicedot = document.getElementsByclassName("dicedot");
      const choice = ["1", "2", "3", "4", "5", "6"]; // players choice of number
     // const numberOfRolls = 6
             
         function playerchoice() { 
        choice= [i];
        for (i=0;i<els.length;i++) {
        if(els[i].type=='checkbox')
        els[i].checked=!els[i].checked;
        }
        }

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
        const dot = document.createElement("div");

        dot.classList.add("dicedot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);
      }
      return dice;
    }


     // roll Dice and get computers number
     function rollDice() {
      const diceContainer = document.querySelector('.dice-dot');
      const diceSpans = diceContainer.querySelectorAll('span');
      const numberOfRolls = diceSpans.length;
      const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;

     //change random number to dots
     for (let i = 0; i < randomNumber; i++) {
      diceSpans[i].classList.add('dice');

   
     }
     console.log("roll dice");

       message.textContent = "dice rolled: ";
    }
    
    console.log("convert numbers to dots");
       
      
   

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
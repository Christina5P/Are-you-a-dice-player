//dice.style.animation = 'none';

 //call dicecontainer from HTML to create dice in
 const diceContainer = document.getElementById("diceContainer")
 
 const diceSpans = diceContainer.querySelectorAll("span");
 const numberOfRolls = diceSpans.length;
 const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;


diceContainer.innerHTML = "" ; // empty the dicecontainer to next game

let dice;
try {
  
//create the dots position on dice:(innan var det bara number i parentes)
function createDice(randomNumber) {
  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [[20, 20], [80, 80]],
    3: [[20, 20], [50, 50], [80, 80]],
    4: [[20, 20], [20, 80], [80, 20], [80, 80]],
    5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
    6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]]
  };

  const dice = document.createElement("div");
  dice.classList.add("dice");

  for (const dotPosition of dotPositionMatrix[randomNumber]) {
    const dot = document.createElement("span");
    dot.classList.add("dice-dot");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }

  return dice;
}
const dice = createDice(randomNumber);
 diceContainer.appendChild(dice);
 dice.style.animation = rollDice();
 
  // Lägg till en klickhändelselyssnare på tärningen
  dice.addEventListener('click', function() {
    dice.style.animation = 'roll 8s infinite linear';   //Start animation of roll
    setTimeout(() => {
      playerChoices.push(randomNumber);
      checkAnswer(randomNumber);
      }, 8000); // 8 sekunder är längden på animationen
});
          //for animation-switch the dots sides in case of the randomnumber
   if(dice){   
          switch (randomNumber) {
               case 1:
                   dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                   break;
                 case 6:
                   dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                   break;
                 case 2:
                   dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                   break;
                 case 5:
                   dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                   break;
                 case 3:
                   dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                   break;
                 case 4:
                   dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                   break;
                 default:
                   break;                
         }
        }
        
        setTimeout(() => {
      
        }, 100);
                  
    
         
} catch (error) {
  console.error('Ett fel inträffade:', error);
}
        
        
     
 


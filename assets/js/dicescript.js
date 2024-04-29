
let randomNumber = Math.floor(Math.random() * 6) + 1;
  
//roll dice when clicking on it
function rollDice() {
diceContainer.innerHTML = ""; // clear dots to new roll
 const dice = createDice(randomNumber);
 diceContainer.appendChild(dice);
       return randomNumber; 
}     

//create div and spans for dice and 6 sides of number
let dice = document.createElement("div");
dice.classList.add("dice");

  //addventlistener to start roll dice
  dice.addEventListener("click", function() {
   console.log("clicked on dice");
   dice.classList.add('animate'); //start animate
   setTimeout(() => {
     dice.classList.remove('animate'); //stop animate after timeout
     playerChoices.push(randomNumber);
     checkAnswer(randomNumber);
         }, 3000); // dice rolls in 3 seconds
    document.getElementById("message").textContent = "dice rolled: ";
});

//create the dots position on dice
function createDice(randomNumber) {
 let dotPositionMatrix = {
   1: [[50, 50]],
   2: [[20, 20], [80, 80]],
   3: [[20, 20], [50, 50], [80, 80]],
   4: [[20, 20], [20, 80], [80, 20], [80, 80]],
   5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
   6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]]
 };
for (let dotPosition of dotPositionMatrix[randomNumber]) {
   let dot = document.createElement("span");
   dot.classList.add("dice-dot");
   dot.style.setProperty("--top", dotPosition[0] + "%");
   dot.style.setProperty("--left", dotPosition[1] + "%");
   dice.appendChild(dot);
 }
 return dice;
}

dice = createDice(randomNumber);
diceContainer.appendChild(dice);

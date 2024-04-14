
const playElement = document.getElementById("message");
let choicecounter = 0;

// To roll the dice just once time 
const myPlayBtn = document.getElementById("play");
myPlayBtn.addEventListener('click', function () {
  message.textContent = "Roll dice:";
  choicecounter = 0;
  buttons.forEach(button => {
    button.style.backgroundColor = "#000000";
  })
});

// Players choice of number 
const playerScore = document.getElementById("player-score");
const choice = ["1", "2", "3", "4", "5", "6"]; // players choice of number    
const buttons = document.querySelectorAll(".control");

buttons.forEach(button => {
  button.addEventListener("click", changeBoardColor);
});

// change colour of picked cards with number - 3 cards
function changeBoardColor(event) {
  if (choicecounter < 3) {
    console.log("click button");
    console.log(event.target.value);
    event.target.style.backgroundColor = "#FFFFFF";
    //   board.style.transition = ".5s ease";
    choicecounter++;
  }
}
//create the dice
function createDice(number) {
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

    // create the dots on dice 
    dot.classList.add("dice-dot");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }
  return dice;
}

const diceContainer = document.getElementById("dice-container");
diceContainer.innerHTML = ""; // clear dots to new roll
const dice = createDice(6);
diceContainer.appendChild(dice);

// roll Dice with dots 
function rollDice() {
  if (message.textContent == "Roll dice:") {
    const diceContainer = document.getElementById('dice-container');
    const diceSpans = diceContainer.querySelectorAll('span');

    // Add class "roll" to get animation
    diceSpans.forEach(span => span.classList.add("roll"));

    // quit animation
    setTimeout(() => {
      diceSpans.forEach(span => span.classList.remove("roll"));
    }, 2000);
    const numberOfRolls = diceSpans.length;
    console.log("numberOfRolls", numberOfRolls);
    const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;

    console.log(randomNumber);

    diceContainer.innerHTML = ""; // clear dots to new roll
    const dice = createDice(randomNumber);
    diceContainer.appendChild(dice);

     message.textContent = "dice rolled: ";
     
   checkAnswer();
   return randomNumber;
  }
}
const messageElement = document.getElementById("result");

const playerChoices = [];

function changeBoardColor(event) {
  if (choicecounter < 3) {
    
    event.target.style.backgroundColor = "#FFFFFF";
    //   board.style.transition = ".5s ease";
      playerChoices.push(event.target.value);
      choicecounter++;
    
  }
}
console.log(playerChoices);

function checkAnswer() {
  const correctNumber = rollDice();

 if (playerChoices === correctNumber) { 
 // if (playerChoices.includes(correctNumber.toString())) { 

  messageElement.textContent = "You won";
  }
  else {
  messageElement.textContent = "You lost";
}
}









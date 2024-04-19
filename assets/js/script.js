// to get to numbers and count players choice of number
const playElement = document.getElementById("message");
let choicecounter = 0;
let allImages = document.querySelectorAll(".image");

// To roll the dice just once time 
const myPlayBtn = document.getElementById("play");
myPlayBtn.addEventListener('click', function () {
  message.textContent = "click here to roll dice";
  choicecounter = 0;
  buttons.forEach(button => {
  button.style.backgroundColor = "#000000";
  })
});


// Players bet of value 
const betScore = document.getElementById("bet-score");
const value = ["10", "50", "100",];   
const cashes = document.querySelectorAll(".image");
  
   // keep picked value in a box
    cashes.forEach(cash => {
      cash.addEventListener("click", caches);
    });

    
// button and function to restart the game  
const playAgainBtn = document.getElementById("play");
playAgainBtn.addEventListener('click', function () {
playerChoices.length = 0; // empty choicers array
messageElement.textContent = ""; // clear message "Roll Dice"
//document.querySelectorAll(".image").forEach(img => img.classList.remove("hidden"));
   });
  

 

    function caches(event) {
      if (choicecounter < 1) {
        console.log("click cash");
        document.querySelectorAll(".image").forEach(img => img.classList.add("hidden"));
        event.target.classList.remove("hidden");
       event.target.classList.add("selected");
        choicecounter++;         
      }    console.log(event.target);
     
    }
         

// Players choice of number 
const playerScore = document.getElementById("player-score");
const choice = ["1", "2", "3", "4", "5", "6"];   
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
    board.style.transition = ".5s ease";
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
let diceContainer = document.getElementById("diceContainer");
//diceContainer.innerHTML = "" ;
const dice = createDice(6);
diceContainer.appendChild(dice);

// roll Dice with dots 
function rollDice() {
  if (message.textContent == "click here to roll dice") {
    let diceContainer = document.getElementById("diceContainer");
    let diceSpans = diceContainer.querySelectorAll("span");

    // Add class "roll" to get animation
    diceSpans.forEach(span => span.classList.add("roll"));

    // quit animation
    setTimeout(() => {
      diceSpans.forEach(span => span.classList.remove("roll"));
      const correctNumber = rollDiceInternal(); // call function rollDiceInternal() to keep result in correctNumber
      checkAnswer(correctNumber);
    },1000);
  }
}

//function to compare playerchoice and diceroll to get true or false (help with this function from perplexity)
function rollDiceInternal() {
  const diceContainer = document.getElementById("diceContainer");
  const diceSpans = diceContainer.querySelectorAll("span");
  const numberOfRolls = diceSpans.length;
  const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;
  diceContainer.innerHTML = ""; // clear dots to new roll
  const dice = createDice(randomNumber);
  diceContainer.appendChild(dice);
     message.textContent = "dice rolled: ";
     return randomNumber;
}
     const playerChoices = [];
function changeBoardColor(event) {
  if (choicecounter < 4) {
        event.target.style.backgroundColor = "#FFFFFF";
        playerChoices.push(event.target.value);
        choicecounter++;
    
      }  console.log(playerChoices);
}
// call the winner or loser video from result
const messageElement = document.getElementById("result");
const winnervideo = document.createElement("video");
const loservideo = document.createElement("video");
winnervideo.src = "assets/image/win.mp4";
winnervideo.alt = "winner";
winnervideo.type = "video/mp4";
winnervideo.autoplay = true;
winnervideo.muted = true;
loservideo.src ="assets/image/lose.mp4";
loservideo.alt = "loser";
loservideo.type = "video/mp4";
loservideo.autoplay = true;
loservideo.muted = true

//function to check playerschoice and give result and video
function checkAnswer(correctNumber) {
   console.log("correctnumber", correctNumber);
   console.log(playerChoices);
 
 if (playerChoices.includes(correctNumber.toString()))  {
   messageElement.textContent = "You won";
  messageElement.appendChild(winnervideo);
  winnervideo.autoplay = true
    console.log(winnervideo.autoplay);
  }   else {
  messageElement.textContent = "You lost";
  messageElement.appendChild(loservideo);
  
  console.log(loservideo.autoplay);
  }
}

// replace all values when play again
myPlayBtn.addEventListener("click", function() {
  allImages.forEach(img => {
    img.classList.remove("hidden");
    img.classList.remove("selected");
    console.log(allImages.remove);
  });
});

// move back to top when clicking "play-again" button
playAgainBtn.addEventListener("click", topFunction);
function topFunction() {
   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera*/
}

  


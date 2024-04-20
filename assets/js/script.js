  
// button and function to restart the game  
const playAgainBtn = document.getElementById("play");
playAgainBtn.addEventListener('click', function () {
playerChoices.length = 0; // empty choicers array
messageElement.textContent = ""; // clear message "Roll Dice"
   });

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
 
   
// pick value from images
    function caches(event) {
      if (choicecounter < 1) {
        console.log("click cash");
        document.querySelectorAll(".image").forEach(img => img.classList.add("hidden"));
        event.target.classList.remove("hidden");
       event.target.classList.add("selected");
        choicecounter++;         
      }    console.log(event.target);
  
        const selectedImage = document.querySelector(".image.selected");
         console.log(selectedImage);
         
  // Call textContent function here
  textContent(selectedImage);
        }

   
 
       //text to descibe how many numbers you pick
    function textContent(selectedImage) {
      var picknumberElement = document.getElementById("picknumber")
       
      console.log("picknumber2");

           if (selectedImage.id === "100") {
      picknumberElement.textContent = "Now you can pick 1 number";
      console.log(textContent());
    } else if (selectedImage.id === "50") {
      picknumberElement.textContent = "Now you can pick 2 numbers";
      console.log(textContent());
    } else if (selectedImage.id === "10") {
      picknumberElement.textContent = "Now you can pick 3 numbers";
            console.log(textContent());
       }
  };


// Players choice of number 
const playerScore = document.getElementById("player-score");
const choice = ["1", "2", "3", "4", "5", "6"];   
const buttons = document.querySelectorAll(".control");
buttons.forEach(button => {
  button.addEventListener("click", changeBoardColor);
  
});

// change colour of picked cards with number - 3 cards

 const playerChoices = [];

function changeBoardColor(event) {
  let selectedImage = document.querySelector(".image.selected");
  if (selectedImage) {

    if (selectedImage.id === "100" && choicecounter < 2) {
      console.log("click button");
      console.log(event.target.value);
      event.target.style.backgroundColor = "#FFFFFF";
      board.style.transition = ".5s ease";
      playerChoices.push(event.target.value);
      choicecounter++;

    } else if (selectedImage.id === "50" && choicecounter < 3) {
      console.log("click button");
      console.log(event.target.value);
      event.target.style.backgroundColor = "#FFFFFF";
      board.style.transition = ".5s ease";
      playerChoices.push(event.target.value);
      choicecounter++;
    } else if (selectedImage.id === "10" && choicecounter < 4) {
      console.log("click button");
      console.log(event.target.value);
      event.target.style.backgroundColor = "#FFFFFF";
      board.style.transition = ".5s ease";
      playerChoices.push(event.target.value);
      choicecounter++;
    }
  }
}
//create the dice dots position
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
dice.style.animation = 'none';


// roll Dice with dots 
function rollDice() {
  if (message.textContent == "click here to roll dice") {
    let diceContainer = document.getElementById("diceContainer");
    let diceSpans = diceContainer.querySelectorAll("span");

   
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const dice = createDice(randomNumber);
    diceContainer.innerHTML = "";
    diceContainer.appendChild(dice);

    
//Start animation of roll
setTimeout(() => {
  dice.style.animation = 'roll 8s infinite linear';
}, 100);

 setTimeout(() => {
  diceSpans.forEach(span => span.classList.remove("roll"));
  const correctNumber = rollDiceInternal(); // call function rollDiceInternal() to keep result in correctNumber
  checkAnswer(correctNumber);
}, 3100);
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
  
          
dice.style.animation = 'roll';

console.log("rollDice");
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
  const selectedImage = document.querySelector(".image.selected");
  
  if (selectedImage) {
 if (playerChoices.includes(correctNumber.toString()))  {
   switch (selectedImage.id) {
    case "10":
      messageElement.textContent = "You won 10 euros!";
      break;
    case "50":
      messageElement.textContent = "You won 50 euros!";
      break;
    case "100":
      messageElement.textContent = "You won 100 euros!";
      break;
      default:
        messageElement.textContent = "You won!";
    }
    messageElement.appendChild(winnervideo);
    winnervideo.autoplay = true;
    console.log(winnervideo.autoplay);

  }   else {
  messageElement.textContent = "You lost";
  messageElement.appendChild(loservideo);
  
  console.log("correctnumber", correctNumber);
  console.log(playerChoices);
  console.log(selectedImage)
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
}
  


       //text to descibe how many numbers you pick
  /*  function textContent() {
          if (selectedImage) {
         let picknumberElement = document.getElementById("picknumber");
                 if (selectedImage.id === "100") {
           picknumberElement.textContent = "Pick 1 number";
           console.log(textContent());
           console.log("number1");
         } else if (selectedImage.id === "50") {
           picknumberElement.textContent = "Pick 2 numbers";
           console.log(textContent());
         } else if (selectedImage.id === "10") {
           picknumberElement.textContent = "Pick 3 numbers";
                 console.log(textContent());
        
         }
       }
     }*/
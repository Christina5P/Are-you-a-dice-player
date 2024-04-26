const playAgainBtn = document.getElementById("play");
playAgainBtn.addEventListener('click', function () {
playerChoices.length = 0; // empty choicers array
//messageElement.textContent = ""; // clear message "Roll Dice"
   });

const allImages = document.querySelectorAll(".image"); // Alla bilder som spelaren kan välja (value)
const betScore = document.getElementById("bet-score"); //to call elements for cash
const value = ["10", "50", "100",];   
const picknumberElement = document.getElementById("picknumber"); // picked value 
const playElement = document.getElementById("message");//message to click on dice
const buttons = document.querySelectorAll(".control"); //1-6 buttons in board
//const resetButton = document.getElementById("resetButton");

const playerScore = document.getElementById("player-score");
let playerChoices = []; 
let choicecounter = 0;

const message = document.getElementById("message");

console.log("DOM-innehållet har laddats");

//above is just variabels
 

function startNewGame() {
    playerChoices.length = 0; // Clear the playerChoices array
    choicecounter = 0;
    cashes = null;
   
    allImages.forEach(image => {
      image.classList.remove("selected"); // Iterate through all images and remove the "selected" class
    });
     buttons.forEach(button => {
    button.style.backgroundColor = "#000000";  // Reset the button colors
    });
     message.textContent = "Click on the dice to roll it";   // Clear any previous message
  }

    document.querySelectorAll(".image")

     // Lyssna på klick för varje bild och spara den valda bilden
     allImages.forEach(image => {
        image.addEventListener("click", function(event) {
           
            // Dölj alla bilder (värden) och visa vald bild
            allImages.forEach(img => {
                img.classList.add("hidden");
                img.classList.remove("selected");
            });
    
              
                // Visa den valda bilden och markera den som vald
            image.classList.remove("hidden");
            image.classList.add("selected");

            const selectedImage = image;
            console.log(selectedImage);           
            let textContent = selectedImage;

        if (selectedImage) {
           
            if (selectedImage.id === "100") {
                maxChoices = 1;
                picknumberElement.textContent = "Now you can pick 1 number";
       
            } else if (selectedImage.id === "50") {
                maxChoices = 2;
                picknumberElement.textContent = "Now you can pick 2 numbers";
              
            } else if (selectedImage.id === "10") {
                maxChoices = 3;
                picknumberElement.textContent = "Now you can pick 3 numbers";
                         }
                        }
                    });
                });
                let maxChoices = 0;

                buttons.forEach(button => {
                button.addEventListener("click", function() {
                changeBoardColor(event, maxChoices);
            });
        });   
            
        function changeBoardColor(event, maxChoices) {                
        if (choicecounter < maxChoices) {
        // change the backgroundcolor when click on number
         event.target.style.backgroundColor = "#FFFFFF"; 
         playerChoices.push(event.target.value); 
         choicecounter++; 

         console.log(playerChoices);
        }
    }    
   
// Anropa rollDice() när spelaren har valt alla sina nummer
if (choicecounter === playerChoices.length) {
    const dice = createDice(randomNumber);
    diceContainer.appendChild(dice);
    rollDice();
}

try{
function rollDice() {
    if (message.textContent === "click on the dice to roll it") {

        const diceContainer = document.getElementById("diceContainer");
        const diceSpans = diceContainer.querySelectorAll("span");
        const numberOfRolls = diceSpans.length;

        const randomNumber = Math.floor(Math.random() * numberOfRolls) + 1;

        diceContainer.innerHTML = "";
        const dice = createDice(randomNumber);
        diceContainer.appendChild(dice);

        message.textContent = "dice rolled: ";
    }
}

         
} catch (error) {
    console.error('Ett fel inträffade:', error);
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
 loservideo.muted = true;
  
 //function to check playerschoice and give result and video
 function checkAnswer(randomNumber) {
    const selectedImage = document.querySelector(".image.selected");
    
    if (selectedImage) {
   if (playerChoices.includes(randomNumber.toString()))  {
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
    
    console.log("correct number", randomNumber);
    console.log(playerChoices);
    console.log(selectedImage);
    console.log(loservideo.autoplay);
    }
  }
 
  console.log(randomNumber)
 }
  
 
 function resetDice() {
    diceContainer.innerHTML = "";
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const dice = createDice(randomNumber);
    diceContainer.appendChild(dice);
    dice.style.animation = 'roll 8s infinite linear';
    playerChoices.length = 0;
    messageElement.textContent = ""; //clear msg "dice rolled" before a new game 
}

resetButton.addEventListener ("click", resetDice);
resetDice();

        //move back to top when you click "playagain" button
        document.body.scrollTop = 0;  // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera*/

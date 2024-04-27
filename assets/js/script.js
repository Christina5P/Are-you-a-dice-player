const playAgainBtn = document.getElementById("play");

playAgainBtn.addEventListener('click', function () {
  playerChoices.length = 0; // empty choicers array
 //messageElement.textContent = ""; // clear message "Roll Dice"
  message.textContent = "click here to roll dice";
  selectedImage = null; // empty picked value
  picknumberElement.textContent = ""; // empty picknumber textcontent
  choicecounter=0; // empty players array with numbers
   
 console.log("Button clicked!");
   });


 //move back to top when you click "playagain" button
  document.body.scrollTop = 0;  // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera*/


   //Variabels
const allImages = document.querySelectorAll(".image"); // 3 value.img to pick from
const betScore = document.getElementById("bet-score"); //to call elements for cash
const value = ["10", "50", "100",];   
let picknumberElement = document.getElementById("picknumber"); // picked value 
//let playElement = document.getElementById("message");//message to click on dice
const buttons = document.querySelectorAll(".control"); //1-6 numbersbuttons in board to pick from
//const resetButton = document.getElementById("resetButton");

const playerScore = document.getElementById("player-score"); 
let playerChoices = []; //to start with
let choicecounter = 0; //to start with

let message = document.getElementById("message");

console.log("DOM is loaded");

    document.querySelectorAll(".image")

     // Listener click to save pick img
     allImages.forEach(image => {
        image.addEventListener("click", function() {
           
            // Show picked img and hide the other
            allImages.forEach(img => {
                img.classList.add("hidden");
                img.classList.remove("selected");
            });
    
              // mark the picked img
            image.classList.remove("hidden");
            image.classList.add("selected");

            let selectedImage = image;
            console.log(selectedImage);           
           // let textContent = selectedImage;

            // to call text-instructions how may number to pick
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

  
   // call the winner or loser video from result
 let messageElement = document.getElementById("result");
 const winnervideo = document.createElement("video");
 const loservideo = document.createElement("video");
 winnervideo.src = "assets/image/win.mp4";
 winnervideo.alt = "winner";
 winnervideo.type = "video/mp4";
 winnervideo.autoplay = true;
 loservideo.src ="assets/image/lose.mp4";
 loservideo.alt = "loser";
 loservideo.type = "video/mp4";
 loservideo.autoplay = true;

  
 //function to check playerschoice and give result and video
 function checkAnswer(randomNumber) {
     let selectedImage = document.querySelector(".image.selected");
    
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
    
     console.log(loservideo.autoplay);
    }
  }
 
  console.log(randomNumber)
 }

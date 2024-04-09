
const myPlayBtn = document.getElementById("play")
 
 myPlayBtn.addEventListener('click', function() {
    console.log("StartNewGame");
      });

      const rows = 3;
      const columns = 2;
      let board ;
      
        // making boardgame with space for 6 tiles with numbers to choose // 
        function setupboard() {
        board = Array.from({ length: rows }, () => Array.from({ length: columns },));
        let gamearea = document.getElementById("gamearea");
        gamearea.classList.add("tile");
           
      }
        console.log("board set up");

        let gamearea = document.getElementById("gamearea");
        gamearea.classList.add("0", "1","2","3","4","5",);

       //create parameters to the loopand cellValue o HTML
        function addInitialTiles(board, rows, columns) {
          let gamearea = document.getElementById("gamearea");
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
              let tile = document.createElement("div");
              let cellValue = board[r][c];
              tile.classList.add("tile", "row" + (r + 1), "column" + (c + 1), "cellValue" + cellValue);
                        tile.id = r + "-" + c;             
              tile.textContent=cellValue; 
              gamearea.append(tile); 
                         }
          }
          
          // renderboard needs to update the board and should put in after every function
        renderBoard();
        }
       

// update the cellValue to HTML content
   function updateTile(tile, cellValue) {
    tile.textContent=cellValue;
    tile.classList.remove("cellValue1", "cellValue2", "cellValue3", "cellValue4", "cellValue5", "cellValue6", );
    tile.classList.add ("cellValue" + cellValue)
       }


// TO give the tiles the number and class
for (let row = 0; row < row; row++) {
  for (let column = 0; column < columns; column++) {
 
   let cellValue = board[row][column];
   let tile = document.createElement("div");
      switch (cellValue) {
            case 1:
                tile.classList.add("cellValue1");
                break;
            case 2:
                tile.classList.add("cellValue2");
                break;
            case 3:
                tile.classList.add("cellValue3");
                break;
                case 4:
                tile.classList.add("cellValue4");
                break;
                case 5:
                tile.classList.add("cellValue5");
                break;
                case 6:
                tile.classList.add("cellValue6");
                break;
               
                default:
                  break;
      }
    }
  }

 
  
       // to fill up new tiles after merge with a random number 2,4,8, on empty cells
   function addRandomTile() {
    const emptyCells = getEmptyCells (); 
        if (emptyCells.length > 0) {
        const randomCell =emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const Value = Math.random() < 0.9 ? 2 : 4;
      board[randomCell.row][randomCell.column] = Value;
      renderBoard() ;
    }
  }
  console.log ("fill up tile")

     
  /
//update board with right information
function renderBoard() {
  console.log("Rendering board...");
 let  gamearea = document.getElementById("gamearea");
  gamearea.innerHTML = "";
}
console.log("render board");
 
  

         /* 
 function isGameOver() {
    let emptySquare = false;
    for (let r = 0; r< board.length;r++) {
        for (let c =0; c< board[r].length; c++) {
            return{ GameOver: false};
          }
          
        if (board[r][c] === 2048 && !wonGame) {
            return { GameOver: true };
 }
    }
 }
}*/
    
      
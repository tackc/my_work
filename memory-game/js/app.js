/*----------------------------- constants -----------------------------*/
const COLORS = ['cyan', 'magenta', 'yellow' 'gray']

/*----------------------------- app's state (variables) -----------------------------*/
var level;
var computerMove = [];
var playerMove = [];

/*----------------------------- cached element references -----------------------------*/
var cyan = document.getElementById('cyan');
var magenta = document.getElementById('magenta');
var yellow = document.getElementById('yellow');
var gray = document.getElementById('gray');
var startBtn = document.getElementById('start');

/*----------------------------- event listeners -----------------------------*/
cyan.addEventListener('click', );
magenta.addEventListener('click', );
yellow.addEventListener('click', );
gray.addEventListener('click', );
startBtn.addEventListener('click', );

/*----------------------------- functions -----------------------------*/
//Upon clicking "Start" button
function computerMove() {
      //Game randomly selects 1 of 4 buttons
      
      //Selected button id (1-4) is pushed into array & stored in var 
                  //Number of items in array increases by 1 each round of play (max 50 items in array)
            //Chosen button "lights up" and chosen sound is played
            //Counter displays current level
}

function generateRandomColors() {
      
      computerMove = Math.floor(Math.random() * 5);
      console.log(computerMove);
}
      




//counter that displays number of successful plays







//Buttons (hamburger menu)

      //button to bring the rules back up if desired
      
      //Possible Extras
            //toggle sound on/off
            //easy / hard mode button (slow / fast)

//Page loads with popup displaying rules of the game (considering using sweetalert2). This will allow the interface to be cleaner.


      
      

//Users turn to play
      //Click Button(s) (validated by comparing to random array) *** order needs to be the same
            // If correct...level counter increases by 1
            // Else...game over message appears with button allowing user to play again
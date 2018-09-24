/*----------------------------- constants -----------------------------*/


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

var colors = [cyan, magenta, yellow, gray];
var colorsToPlay = [];

var cyanSound = document.getElementById('cyanSound');
var magentaSound = document.getElementById('magentaSound');
var yellowSound = document.getElementById('yellowSound');
var graySound = document.getElementById('graySound');

/*----------------------------- event listeners -----------------------------*/
cyan.addEventListener('click', );
magenta.addEventListener('click', );
yellow.addEventListener('click', );
gray.addEventListener('click', );
startBtn.addEventListener('click', );

/*----------------------------- functions -----------------------------*/
//Upon clicking "Start" button
function computerMove() {
      for (var i = 0; i < computerMove.length; i++) {

      }
      //Chosen button "lights up" and chosen sound is played
      //Counter displays current level
}

//Selected color id (1-4) is pushed into array & stored in var
function generateRandomColors() {
      var arr = [];
      for (var i = 0; i < 50; i++) {
            arr.push(randomColor());
      }
      console.log(arr);
      computerMove = arr;
}
//Computer randomly selects 1 of 4 colors
function randomColor() {
      computerMove = Math.floor(Math.random() * 4);
      return computerMove;
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
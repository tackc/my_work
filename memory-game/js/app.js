/*----------------------------- constants -----------------------------*/


/*----------------------------- app's state (variables) -----------------------------*/
var levelCounter = 0;
var computerMove = [];
var playerMove = [];
var currentGame;


/*----------------------------- cached element references -----------------------------*/
var cyan = document.getElementById('cyan');
var magenta = document.getElementById('magenta');
var yellow = document.getElementById('yellow');
var gray = document.getElementById('gray');
var startBtn = document.getElementById('start');


var colorsToPlay = [];

var cyanSound = document.getElementById('cyanSound');
var magentaSound = document.getElementById('magentaSound');
var yellowSound = document.getElementById('yellowSound');
var graySound = document.getElementById('graySound');

/*----------------------------- event listeners -----------------------------*/
cyan.addEventListener('click', playSound);
magenta.addEventListener('click', playSound);
yellow.addEventListener('click', playSound);
gray.addEventListener('click', playSound);
startBtn.addEventListener('click', startGame);

document.addEventListener('keydown')

/*----------------------------- functions -----------------------------*/
//user clicks stored in array
function playerMove(evt) {
      playerMove.push(evt.target);
}

function playerClick() {
      // push player move
      // call playSound
}

//play appropriate sound for each button on click
function playSound(evt) {
      var sounds = {
            cyan: cyanSound, 
            magenta: magentaSound, 
            yellow: yellowSound, 
            gray: graySound
            };
      sounds[evt.target.id].currentTime = 0;
      sounds[evt.target.id].play();
}


//Upon clicking "Start" button
function startGame() {
      generateRandomColors();
      for (var i = 0; i < computerMove.length; i++) {
            // computerMove[i].click();
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
      // computerMove = Math.floor(Math.random() * 4);
      switch(Math.floor(Math.random() * 4)) {
            case 0:
                  return cyan;
            case 1:
                  return magenta;
            case 2:
                  return yellow;
            case 3:
                  return gray;
      }
      return computerMove;
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
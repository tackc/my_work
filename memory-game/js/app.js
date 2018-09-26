/*----------------------------- constants -----------------------------*/


/*----------------------------- app's state (variables) -----------------------------*/
var level = "--";
var computerMove = [];
var playerMove = [];
var currentGame;
var turn;
var delay; 1000;


/*----------------------------- cached element references -----------------------------*/
var cyan = document.getElementById('cyan');
var magenta = document.getElementById('magenta');
var yellow = document.getElementById('yellow');
var gray = document.getElementById('gray');
var startBtn = document.getElementById('start');
var currentLevel = document.getElementById('level')

var cyanSound = document.getElementById('cyanSound');
var magentaSound = document.getElementById('magentaSound');
var yellowSound = document.getElementById('yellowSound');
var graySound = document.getElementById('graySound');
var wrong = document.getElementById('wrong');

/*----------------------------- event listeners -----------------------------*/
cyan.addEventListener('click', playerClick);
magenta.addEventListener('click', playerClick);
yellow.addEventListener('click', playerClick);
gray.addEventListener('click', playerClick);
startBtn.addEventListener('click', startGame);



/*----------------------------- functions -----------------------------*/
//reset game function
function resetGame() {
      //reset level counter to 1
      level = "--";
      computerMove = [];
      playerMove = [];
}    
function playGame() {
      turn = 0;
      while ()
}


//if player moves doesn't equal computer moves...you lose
function notEqual() {
      console.log('You lose');
      playSound(wrong);
      resetGame();
}

//compare computer array of moves to user array of moves
function arraysEqual(comp, player) {
      for (var i = 0; i < player.length; i++) {
            if (comp[i] !== player[i]) {
                  notEqual();
            }
      }
}

//user clicks stored in array
function playerClick(evt) {
      console.log(evt.target.id);
      playerMove.push(evt.target.id);
      playSound();
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
      playGame();
      //Counter displays current level
      level = 1;
      //Chosen button "lights up" and chosen sound is played
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
      switch(Math.floor(Math.random() * 4)) {
            case 0:
                  return cyan.id;
            case 1:
                  return magenta.id;
            case 2:
                  return yellow.id;
            case 3:
                  return gray.id;
      }
      return computerMove;
}

      


//counter that displays number of successful plays

//Buttons (hamburger menu)

      //button to bring the rules back up if desired
      
      //Possible Extras
            //toggle sound on/off
            //easy / hard mode button (slow / fast)


      
//Users turn to play
      //Click Button(s) (validated by comparing to random array) *** order needs to be the same
            // If correct...level counter increases by 1
            // Else...game over message appears with button allowing user to play again
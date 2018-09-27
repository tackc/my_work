/*----------------------------- constants -----------------------------*/


/*----------------------------- app's state (variables) -----------------------------*/
var level = "--";
var computerMove = [];
var playerMove = [];
var turn;
var computerIsPlaying = true;
var computerMoveIndex;
// var delay; 1000;


/*----------------------------- cached element references -----------------------------*/
var cyan = document.getElementById('cyan');
var magenta = document.getElementById('magenta');
var yellow = document.getElementById('yellow');
var gray = document.getElementById('gray');
var startBtn = document.getElementById('startbtn');
var resetBtn = document.getElementById('resetbtn');
var currentLevel = document.getElementById('level');

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
resetBtn.addEventListener('click', resetGame);

cyanSound.addEventListener('ended', soundEnded);
magentaSound.addEventListener('ended', soundEnded);
yellowSound.addEventListener('ended', soundEnded);
graySound.addEventListener('ended', soundEnded);


/*----------------------------- functions -----------------------------*/
//reset game function
function resetGame() {
      //reset level counter to 1
      level = 0;
      computerMove = [];
      playerMove = [];
      startBtn.hidden = false;
      resetBtn.style.visibility = 'hidden';
}   


// Spins the CPU for a few milliseconds
function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
            break;
            }
      }
}

function lightButtonAndPlaySound(color) {
      switch (color) {
            case 'cyan':
                  cyan.active = true;
                  cyanSound.play().then(function() {
                        console.log("playing cyan sound");
                        cyan.active = false;
                  });
                  break;
            case 'magenta':
                  magenta.active = true;
                  magentaSound.play().then(function() {
                        console.log("playing magenta sound");
                        magenta.active = false;  
                  });
                  break;
            case 'yellow':
                  yellow.active = true;
                  yellowSound.play().then(function() {
                        console.log("playing yellow sound");
                        yellow.active = false;
                  });
                  break;
            case 'gray':
                  gray.active = true;
                  graySound.play().then(function() {
                        console.log("playing gray sound");
                        gray.active = false;
                  });
                  break;
      }
      computerMoveIndex++;
}

// Sound ended listener function
function soundEnded(evt) {
      if (computerIsPlaying) {
            lightButtonAndPlaySound(computerMove[computerMoveIndex]);
            if (computerMoveIndex === turn) {
                  computerIsPlaying = false;
            }
      }
      computerMoveIndex = 0;
}

function computerPlay(turn) {
      // Computer plays...
      // console.log('computer is playing');
      // computerIsPlaying = true;
      lightButtonAndPlaySound(computerMove[0]);
      // computerIsPlaying = false;
      // console.log('computer has stopped playing');
}

function playGame() {
      // This initializes the new game
      turn = 1;
      computerMoveIndex = 0;
      startBtn.hidden = true;
      resetBtn.style.visibility = 'visible';
      var error = false;

      computerPlay(turn);     
}

//if player moves doesn't equal computer moves...you lose
function notEqual() {
      console.log('You lose');
      playSound(wrong);
      resetGame();
}

//user clicks stored in array
function playerClick(evt) {
      // This is where we see if they clicked the right thing
      if (evt.target.id === computerMove[computerMoveIndex]) {
            // they clicked the right one
            playSound(evt.target.id);
            computerMoveIndex++;
            if (computerMoveIndex === turn) {
                  console.log("THIS SHOULD TRIGGER THE NEXT COMPUTER MOVE");
                  computerMoveIndex = 0;
                  turn++;
                  sleep(500);
                  computerPlay(turn);
            }
      } else {
            // Oops!
            wrong.play();
      }
}

//play appropriate sound for each button on click
function playSound(color) {
      var sounds = {
            cyan: cyanSound, 
            magenta: magentaSound, 
            yellow: yellowSound, 
            gray: graySound
            };
      sounds[color].currentTime = 0;
      sounds[color].play();
}

//Upon clicking "Start" button
function startGame() {
      //Counter displays current level
      currentLevel.textContent = "1";
      generateRandomColors();
      playGame();
      resetBtn.style.visibility = 'visible';
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

function initialize() {
      resetBtn.style.visibility = 'hidden';   
}

initialize();

//Buttons (hamburger menu)
      //button to bring the rules back up if desired     
//Possible Extras
            //toggle sound on/off
            //easy / hard mode button (slow / fast)


      
//Users turn to play
      //Click Button(s) (validated by comparing to random array) *** order needs to be the same
            // If correct...level counter increases by 1
            // Else...game over message appears with button allowing user to play again


// //helper function to compare playerMove array to computerMove array
// function isEqual(arr1, arr2) {
//       var arr1Len = arr1.length;
//       var arr2Len = arr2.length;
//       if (arr1Len !== arr2Len) return false;
      
//       function compare(item1, item2) {
//             if (!isEqual(item1, item2)) return false;
//             else {
//                   if (item1 !== item2) return false;
//             }
//       } 
      
//       for (var i = 0; i < arr1Len; i++) {
//             if (compare(arr1[i], arr2[i]) === false) return false;
//       } 
//       if (compare(arr1[key]), arr2[key] === false) return false;
//       return true;
// }
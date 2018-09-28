/*----------------------------- constants -----------------------------*/


/*----------------------------- app's state (variables) -----------------------------*/
var level = "--";
var computerMove = [];
var playerMove = [];
var turn;
var computerMoveIndex;
var firstClick = true;


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

// Get the modal
var modal = document.getElementById('gameinfo');
// Get the button that opens the modal
var btn = document.getElementById("game-info");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/*----------------------------- event listeners -----------------------------*/
cyan.addEventListener('click', playerClick);
magenta.addEventListener('click', playerClick);
yellow.addEventListener('click', playerClick);
gray.addEventListener('click', playerClick);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

/*----------------------------- functions -----------------------------*/
//reset game function
function resetGame() {
      //reset level counter to 1
      level = 0;
      currentLevel.textContent = "--";
      computerMove = [];
      startBtn.hidden = false;
      resetBtn.hidden = true;
}   

function lightButtonAndPlaySound(color) {
      switch (color) {
            case 'cyan':
                  cyan.classList.add("cyan-active");
                  cyanSound.play();
                  setTimeout(function() {
                        cyan.classList.remove("cyan-active");
                  }, 400)
                  break;
            case 'magenta':
                  magenta.classList.add("magenta-active");
                  magentaSound.play();
                  setTimeout(function() {
                        magenta.classList.remove("magenta-active");
                  }, 400)
                  break;
            case 'yellow':
                  yellow.classList.add("yellow-active");
                  yellowSound.play();
                  setTimeout(function() {
                        yellow.classList.remove("yellow-active");
                  }, 400)
                  break;
            case 'gray':
                  gray.classList.add("gray-active");
                  graySound.play();
                  setTimeout(function() {
                        gray.classList.remove("gray-active");
                  }, 400)
                  break;
      }
      computerMoveIndex++;
}

function computerPlay(turn) {
      // Computer plays...
      lightButtonAndPlaySound(computerMove[0]);
      for (let i = 1; i < turn; i++) {
            setTimeout(function() {
                  lightButtonAndPlaySound(computerMove[i]);
            }, i * 1000);
      }
      computerMoveIndex = 0;
      currentLevel.textContent = turn;
}

function playerClick(evt) {
      // This is where we see if they clicked the right thing
      if (firstClick) {
            computerMoveIndex = 0;
            firstClick = false;
      }
      if (evt.target.id === computerMove[computerMoveIndex]) {
            // they clicked the right one
            playSound(evt.target.id);
            computerMoveIndex++;
            if (computerMoveIndex === turn) {
                  firstClick = true;
                  turn++;
                  setTimeout(function() {
                        computerPlay(turn);
                  }, 750);
            }
      } else {
            // Oops! You played the wrong move
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
      currentLevel.textContent = 1;
      // This initializes the new game
      generateRandomColors();
      turn = 1;
      computerMoveIndex = 0;
      startBtn.hidden = true;
      resetBtn.hidden = false;
      computerPlay(turn);
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
// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
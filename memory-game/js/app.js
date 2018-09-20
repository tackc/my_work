//Considering using vanilla javascript for my own practice

//Buttons (considering using hamburger menu)
      //need 4 uniquely colored buttons for gameplay
      //start game button
      //counter that displays number of successful plays
      //button to bring the rules back up if desired
      
      //Possible Extras
            //toggle sound on/off
            //easy / hard mode button (slow / fast)

//Page loads with popup displaying rules of the game (considering using sweetalert2). This will allow the interface to be cleaner.

//Upon clicking "Start" button
      //Game randomly selects 1 of 4 buttons
      //Selected button id (1-4) is pushed into array & stored in var 
            //Number of items in array increases by 1 each round of play (max 100 items in array)
      //Chosen button "lights up" and chosen sound is played
      //Counter displays current level

//Users turn to play
      //Click Button(s) (validated by comparing to random array) *** order needs to be the same
            // If correct...level counter increases by 1
            // Else...game over message appears with button allowing user to play again
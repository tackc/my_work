# Simon - Memory Game
---

### History

#### Simon Electronic Game, 1978

Named for the children’s game of “Simon Says,” inventors Ralph Baer and Howard Morrison created the game Simon. Their inspiration for the game came from an arcade game called _Touch Me_ made by Atari. The two felt the game had potential if created propely with pleasant sounds. Simon had four different colored buttons (red, green, blue and yellow) which each play a different sound when pressed. The original game was released by Milton Bradley in 1978 including a release party at Studio 54, the elite disco in NYC [^fn]

### Rules of play:
* Observe the pattern played by the game.
* Repeat the pattern back.
* Each round of play, the number of items in the pattern increases by 1

### Wireframes 
![alt text](https://i.imgur.com/l2U2jtq.png "Start Screen")
![alt text](https://i.imgur.com/RU6Raav.png "Game Options")
![alt text](https://i.imgur.com/RKomfDI.png "Game Play")


### Pseudocode
* Considering using vanilla javascript for my own practice

* Buttons (considering using hamburger menu)
      * need 4 uniquely colored buttons for gameplay
      * start game button
      * counter that displays number of successful plays
      * button to bring the rules back up if desired
      
      // Possible Extras
            //toggle sound on/off
            //easy / hard mode button

* Page loads with popup displaying rules of the game (considering using sweetalert2). This will allow the interface to be cleaner.

* Upon clicking "Start" button
      * Game randomly selects 1 of 4 buttons
      * Selected button id (1-4) is pushed into array & stored in var 
            * Number of items in array increases by 1 each round of play (max 100 items in array)
      * Chosen button "lights up" and chosen sound is played
      * Counter displays current level

* Users turn to play
      * Click Button(s) (validated by comparing to random array) *** order needs to be the same
            *  If correct...level counter increases by 1
            *  Else...game over message appears with button allowing user to play again







[^fn]: http://americanhistory.si.edu/collections/search/object/nmah_1302005
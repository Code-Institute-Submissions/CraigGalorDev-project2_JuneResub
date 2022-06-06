# Rock Paper Scissors,Lizard #
Rock, lizard, spock an addaptation of the traditional rock paper scissors game with two extra hand signs to play with increasing the unpredictable odds of this classic past time.
  
For those who enjoy making tricky decisions this helps instead of fliping a coin or if you  just like a little challenge now and then, the games out come is the most enjoyable part. 

**Best out of three**

 * to keep the game iteresting the player has 3 lives
 * each time the player loses a turn they lose a life but are still in the game
 * only when all 3 lives are spent is the game over or if the computers lives are
   spent do you complete the game and have beaten the computer.
 * (later versions should include chances to win a life back e.g. 3 straight wins = 1 life)

![responsive](assets/images/responsive.png)

## Response Mockup ##
![mockup](assets/images/mockup.png) ![responsivephone](assets/images/responsephone.png)

# Features #
* hand selection
* life counter
* game counter
* outcome circle colour
* people who like to play traditional rock paper scissors game with extra hands. 


## Existing Features ##
The hand selection Heading
![handheading](assets/images/handheading.png)
At the top of the page there are the various hands shapes featured that the user can select to play against the computer. This section requires the user to make a selection to play the game. The user will be able to easily see the icons for rock, lizard, spock, paper and scissors.
The user will be able to select the type of hand they will be playing with by clicking on the different icons this also starts the computers random selection behind the scenes.

**what happens**

 * hand variables for the game are used
 * picking a specific hand will set the numerical values
 * for all of the empty variables, each time a hand is selected. 
 * the selcted hand will be equal to 1 
 * the hands that the selected hand is weak against will be set to 2
 * and the hands that the selected hand is strong against stay at 0
 * so 1 > 0 you win, 1 < 2 you lose, 1=1 its a draw

## The Game Area ##
![gamearea](assets/images/gamearea.png)

The Game Area is where the user will be able to see the hand shape they have choosen to play with, along with the start button to start playing the game. The user and computer will also have three life icons displayed on each side ,when all lives are lost by either party the game is over.

 **How does the computer play**

 * the computer selection, first randomly picks a number between 1-5
 * were each number 1 to 5 has a string value hand name associated to it e.g. 1 =" rock"
 * As the hand variables have been set by the users selection the
 * computers string value of "rock" etc will equal the current numerical
   value set for that hand set by the players hand choice for this iteration.

## The Score Area ##
![scorearea](assets/images/scorearea.png)
This section will allow the user to see exactly how many completed game outcomes were won or lost to the computer


## Testing ##
the basic operation of the game works, selection alerts were used initially to inform the player
this has been replaced with a status box between the names of the competitors.

## Validator Testing ##

* **HTML**
![validationhtml](assets/images/validation.png)

some errors were returned when passing through the official W3C validator
You cannot place divs inside button elements lesson learned.
taking out the div labels everything came back all clear.

* **CSS**
![cssvalidation](assets/images/jigsawvalidation.png)
No errors were found when passing through the official (Jigsaw) validator

* **JavaScript** 
![](assets/images/jshintval.png)
Suggestions were found when passing through the official Jshint validator
The following metrics were returned:
CONFIGURE

## Metrics ##
* There are 7 functions in this file.

* Function with the largest signature take 0 arguments, while the median is 0.

* Largest function has 38 statements in it, while the median is 6.

* The most complex function has a cyclomatic complexity value of 19 while the median is 5.


## Deployment ##
The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, the page will be automatically refreshed
  with a detailed ribbon display to  indicate the successful deployment.
* The live link can be found here - https://craiggalordev.github.io/project2/

## Credits ##
* the image used for the hand icons
https://static.wixstatic.com/media/903056_39aa9523c70a428684be9744580b0b1b~mv2.png/v1/fit/w_1000%2Ch_1000%2Cal_c/file.png
* the heart icons are from font awsome 
* the template is from codeinsitute
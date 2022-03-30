/**
 * these are the hand variables for the game
 * picking a specific hand will set the numerical values
 * for each empty variable each time a hand is selected. 
 * the selcted hand will be equal to 1, the hands that
 * the selected hand is weak against will be set to 2
 * and the hands that the selected hand is strong against stay at 0
 * so 1>0 you win, 1<2 you lose, 1=1 its a draw
 *  */ 
let rock=0, lizard=0, spock=0, paper=0, scissors= 0;
/**
 * these hold the selected numerical values based on hand selection
 * the players variable is set depending on the icon selction and
 * sets the values of the variables above.
 * the computer selection, first randomly picks a number between 1-5
 * were each number 1 to 5 has a string value hand e.g. 1 =" rock"
 * As the hand variables have been set by the users selection the
 * computerSelect string value of "rock" etc will equal the current numerical
 * value set for that hand for this iteration.
 */
let playerSelect=0,computerSelect=0;
/**
 * The win and lost counters are set each iteration(Start button being clicked)
 * as stated above the winners hand has a greater numerical value than the loser
 * this only counts the wins and losses
 */
let win=0,lost=0;
/**
 * to keep the game iteresting the player has 3 lives
 * each time the player loses a turn they lose a life but are still in the game
 * only when all 3 lives a spent is the game over or if the computers lives are
 * spent do you complete the game and have beaten the computer.
 * (later versions should include chances to win a life back e.g. 3 straight wins = 1 life)
 */
let playLives=3,comLives=3;

/**
 * selecting a hand type
 */
document.addEventListener("DOMContentLoaded", function(){
    let hands = document.getElementsByTagName("button");

    for(let button of hands){
        button.addEventListener("click",function(){
            alert("you made a selection");
           
            if(this.getAttribute("data-type") ==="submit"){
                alert("StartGame")
              // checkPicked();
            } 
            else if(this.getAttribute("data-type") ==="rock"){
                alert("you selected rock");
                console.log("you selected rock");
             }
            else if(this.getAttribute("data-type") ==="lizard"){
                alert("you selected lizard");
                console.log("you selected lizard")
             } 
             else if(this.getAttribute("data-type") ==="spock"){
                alert("you selected spock");
                console.log("you selected spock")
             }
             else if(this.getAttribute("data-type") ==="paper"){
                alert("you selected paper");
                console.log("you selected paper")
             }
             else if(this.getAttribute("data-type") ==="scissors"){
                alert("you selected scissor");
                console.log("you selected scissors")
             }    
            else{
                console.log("wrong selection ")
            }
        })
    }
})
function handSelected(){}

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
 let playerSelect = 0,computerSelect = 0;
 /**
  * The win and lost counters are set each iteration(Start button being clicked)
  * as stated above the winners hand has a greater numerical value than the loser
  * this only counts the wins and losses
  */
 let winCount = 0, lostCount = 0;
 /**
 * to keep the game iteresting the player has 3 lives
 * each time the player loses a turn they lose a life but are still in the game
 * only when all 3 lives a spent is the game over or if the computers lives are
 * spent do you complete the game and have beaten the computer.
 * (later versions should include chances to win a life back e.g. 3 straight wins = 1 life)
 */
let playLives = 3, comLives = 3;

function clear(){
    rock=0, lizard=0, spock=0, paper=0, scissors= 0;
   /**  playerPick = document.getElementById("playersChoosen").innerHTML;
    playerPick.style.backgroundUrl="";
    playerPick.innerHTML='<div id="playWait">Please Pick a hand</div>';

    comPick = document.getElementById("computersChoosen").innerHTML;
    comPick.innerHTML='<div id="comWait">?</div>'
    */
    playerSelect = 0, computerSelect = 0;
    playLives = 3, comLives = 3;
    document.getElementById("startButton").innerText = "START";
}
function restart(){
    rock=0, lizard=0, spock=0, paper=0, scissors= 0;
    playerSelect = 0, computerSelect = 0;
    playLives = 3, comLives = 3;
    document.getElementById("startButton").innerText = "START";
    document.getElementById("status").innerText = "VS";
    document.getElementById('playersChoosen').innerHTML='<div id="selectionAfter"></div>';
    document.getElementById('computersChoosen').innerHTML='<div id="selectionAfter"></div>';
    document.getElementById('playersChoosen').style.border = 'solid 5px rgb(13, 162, 221)';
    document.getElementById('computersChoosen').style.border = 'solid 5px blue'; 
    pLives();
    cLives();
}





/**
 * selecting a hand type
 */
document.addEventListener("DOMContentLoaded", function(){

    if(playLives > 0 || comLives > 0){
        let hands = document.getElementsByTagName("button");

        for(let button of hands){
            button.addEventListener("click",function(){
                
            
        
            
                if(this.getAttribute("data-type") ==="submit"){
                    if(playerSelect== 0){
                        document.getElementById("status").innerText = "Pick a Hand";
                    }
                    else if(playerSelect != 0){
                        /**
                         * this is were you start computer random selection
                         */
                    
                    let random = Math.floor(Math.random()*5)+1;
                    let icon=random;
                    switch(icon){
                        case 1 : document.getElementById('computersChoosen').innerHTML='<div id="rocky"></div>'; break;
                        case 2 : document.getElementById('computersChoosen').innerHTML='<div id="hssss"></div>'; break;
                        case 3 : document.getElementById('computersChoosen').innerHTML='<div id="vulcan"></div>'; break;
                        case 4 :  document.getElementById('computersChoosen').innerHTML='<div id="wrap"></div>'; break;
                        case 5 :  document.getElementById('computersChoosen').innerHTML='<div id="rocky"></div>'; break;
                        default: alert("The computer crashed!"), clear();
                    }
                        switch(random){
                            case 1 : computerSelect= rock; break;
                            case 2 : computerSelect= lizard; break;
                            case 3 : computerSelect= spock; break;
                            case 4 : computerSelect= paper; break;
                            case 5 : computerSelect= scissors; break;
                            default: alert("The computer crashed!"), clear();
                        }
                        console.log(computerSelect);
                        startGame();
                    }
                } 
                else if(this.getAttribute("data-type") ==="rock"){
                    clear();
                    document.getElementById("status").innerText = "selected rock";
                    document.getElementById("startButton").innerText = "PLAY";
                    rock=1,spock=2,paper=2;
                    playerSelect=rock;
                    document.getElementById('playersChoosen').innerHTML='<div id="rocky"></div>';
                    
                }
                else if(this.getAttribute("data-type") ==="lizard"){
                    clear();
                    document.getElementById("status").innerText = "selected lizard";
                    document.getElementById("startButton").innerText = "PLAY";
                    lizard=1,scissors=2,rock=2;
                    playerSelect=lizard;
                    document.getElementById('playersChoosen').innerHTML='<div id="hssss"></div>';
                } 
                else if(this.getAttribute("data-type") ==="spock"){
                    clear();
                    document.getElementById("status").innerText = "selected spock";
                    document.getElementById("startButton").innerText = "PLAY";
                    spock=1,paper=2,lizard=2;
                    playerSelect=spock;
                    document.getElementById('playersChoosen').innerHTML='<div id="vulcan"></div>';
                }
                else if(this.getAttribute("data-type") ==="paper"){
                    document.getElementById("status").innerText = "selected paper";
                    document.getElementById("startButton").innerText = "PLAY";
                    paper=1,scissors=2,lizard=2;
                    playerSelect=paper;
                    document.getElementById('playersChoosen').innerHTML='<div id="wrap"></div>';
                }
                else if(this.getAttribute("data-type") ==="scissors"){
                    document.getElementById("status").innerText = "selected scissors";
                    document.getElementById("startButton").innerText = "PLAY";
                    scissors=1,rock=2,spock=2;
                    playerSelect=scissors;
                    document.getElementById('playersChoosen').innerHTML='<div id="cutting"></div>';
                }    
                else{
                    console.log("wrong selection ");
                }
            });
        }
    }
    else{
        alert("the is Game Over")
        clear();
    }
});

function startGame(){
    gameStatus = document.getElementById("startButton").innerText;
    
    if (gameStatus == "PLAY"){
        if(playerSelect > computerSelect){
            document.getElementById("status").innerText = "You won";
            document.getElementById('playersChoosen').style.border = 'solid 5px green';
            document.getElementById('computersChoosen').style.border = 'solid 5px red'; 
            --comLives;
            cLives();
            if (comLives == 0) {
                ++winCount;
                document.getElementById("victory").innerText = winCount;
                document.getElementById("victory").innerText.toString;
                document.getElementById("status").innerText = "Game over";
                document.getElementById("startButton").innerText = "Restart";
                document.getElementById("status").innerText = "Victory";
            }
        }
        else if(playerSelect < computerSelect){
            document.getElementById("status").innerText = "You Lost";
            document.getElementById('playersChoosen').style.border = 'solid 5px red';
            document.getElementById('computersChoosen').style.border = 'solid 5px green'; 
            --playLives;
            pLives();
            if(playLives == 0){
                ++lostCount;
                document.getElementById("defeat").innerText = lostCount;
                document.getElementById("defeat").innerText.toString;
                document.getElementById("status").innerText = "Game over";
                document.getElementById("startButton").innerText = "Restart";
                document.getElementById("status").innerText = "Defeated";
            }
        }
        else{
            document.getElementById("status").innerText = "Draw";
            document.getElementById('playersChoosen').style.border = 'solid 5px black';
            document.getElementById('computersChoosen').style.border = 'solid 5px black';
        }  
    }
    else{
        
    /* refresh page*/
    restart();
    }
}
 
function pLives(){
    switch (playLives){
        case 3: document.getElementById("playLifeOne").style.color="red";
                document.getElementById("playLifeTwo").style.color="red";
                document.getElementById("playLifeThree").style.color="red";break;
        case 2: document.getElementById("playLifeOne").style.color="#fff";break;
        case 1: document.getElementById("playLifeTwo").style.color="#fff";break;
        case 0: document.getElementById("playLifeThree").style.color="#fff";break;
    }
}

function cLives(){
    switch (comLives){
        case 3: document.getElementById("comLifeOne").style.color="red";
                document.getElementById("comLifeTwo").style.color="red";
                document.getElementById("comLifeThree").style.color="red";break;
        case 2: document.getElementById("comLifeOne").style.color="#fff";break;
        case 1: document.getElementById("comLifeTwo").style.color="#fff";break;
        case 0: document.getElementById("comLifeThree").style.color="#fff";break;
    }
}
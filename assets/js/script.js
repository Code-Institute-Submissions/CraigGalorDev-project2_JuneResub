

let rock=0, lizard=0, spock=0, paper=0, scissors= 0;
let playerSelect = 0,computerSelect = 0;
let winCount = 0, lostCount = 0;
let playLives = 3, comLives = 3;

function clear(){
    rock=0, lizard=0, spock=0, paper=0, scissors= 0;
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
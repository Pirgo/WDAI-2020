var gameArea = document.getElementById('gameArea');
var balloonCnt = 1;
var balloonShot = 0;
var shotCnt = 0;
var allShots = 0;
var points = 0;
var accuracy = 100;
var audio0 = new Audio("sounds/shoot-bow.mp3");
var audio1 = new Audio("sounds/balloon-pop.mp3");
var nick = document.getElementById('nickBox');
var pointsscored = document.getElementById('pointsBox');
var nmbballoon = document.getElementById('roundBox');
var nmbballoonshot = document.getElementById('hitBox');
var nmbShots = document.getElementById('shootsFiredBox');
var accuracyValue = document.getElementById('accuracyBox');
accuracyValue.innerHTML = accuracy
var startTimer;


gameArea.setAttribute('onclick', 'miss()');
generateBalloon();
updateNmbBalloon();
balloonCnt++;

function main(id, checked, event){
        
        if (document.getElementById(id) == null) return;
        if (event != null) event.stopPropagation();
        removeBalloon(id);
        if(checked){
            updatePoints();
            audio1.play();
            updateShooted();
            changeBackground('red', 0);
        }
        if(balloonCnt <= 30){
            changeBackground('white', 50);
            generateBalloon();
            updateNmbBalloon();
            balloonCnt++;
            
        }
        else{
            alert(`Zdobyłes ${points.toFixed(2)} punktów`);
            gameArea.removeAttribute('onclick');
        }
        
        
    
}


function generateBalloon(){
    const colorPalete = ["red", "yellow", "blue", "green", "pink", "violet"];
    const minDiameter = 40;
    const maxDiameter = 150;
    const balloonColor = colorPalete[Math.floor(Math.random()*colorPalete.length)];
    const balloonDiameter = Math.floor(Math.random()*(maxDiameter-minDiameter) + minDiameter);
    const balloonTop = Math.floor(Math.random() * (400-balloonDiameter));
    const balloonLeft = Math.floor(Math.random() * (900-balloonDiameter));
    const newBalloon = document.createElement('div');
    newBalloon.setAttribute('class', 'balloon');
    const balloonid = `balloon${balloonCnt}`;
    newBalloon.setAttribute('id', balloonid);
    newBalloon.setAttribute('onclick', "main(this.id, true, event)")
    newBalloon.style.width = balloonDiameter;
    newBalloon.style.height = balloonDiameter;
    newBalloon.style.top = `${balloonTop}px`;
    newBalloon.style.left = `${balloonLeft}px`;
    newBalloon.style.background = balloonColor;
    gameArea.appendChild(newBalloon);
    
    (async () =>{
        await setTimeout(`main("${balloonid}", false, null)`, 2000/Math.max((balloonCnt/8),1));
        
    })()

    startTimer = performance.now();
}

function removeBalloon(id){
    const balloonToRemove = document.getElementById(id);
    gameArea.removeChild(balloonToRemove)
}

function updatePoints(){
    let result = performance.now() - startTimer;
    result = 1000/result;
    points += result;
    
    allShots++;
    // points++;
    nmbShots.innerHTML = allShots;
    pointsscored.innerHTML = points.toFixed(2);
}

function updateNmbBalloon(){
    nmbballoon.innerHTML = balloonCnt;
}

function updateShooted(){
    shotCnt++;
    nmbballoonshot.innerHTML = shotCnt;
    accuracyValue.innerHTML = ((shotCnt/allShots)*100).toFixed(2);
}

function miss(){
    allShots++;
    points--;
    pointsscored.innerHTML = points.toFixed(2);
    nmbShots.innerHTML = allShots;
    accuracyValue.innerHTML = ((shotCnt/allShots)*100).toFixed(2);
    audio0.play();
}

function changeBackground(color, delay){
    (async () => {
        await setTimeout(() =>{gameArea.style.background = color}, delay);
    })();
}
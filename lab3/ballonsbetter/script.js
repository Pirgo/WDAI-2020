const gameArea = document.getElementById('gameArea');

let balloonNumber = 1;
const roundBox = document.getElementById('roundBox');

let points = 0;
const pointsBox = document.getElementById('pointsBox');

let killNmb = 0;
const killBox = document.getElementById('hitBox');

let shotNmb = 0;
const shotBox = document.getElementById('shootsFiredBox');

let accuracy = 0.00;
const accuracyBox = document.getElementById('accuracyBox');

const audioShooted = new Audio('sounds/balloon-pop.mp3');
audioShooted.volume = 0.2;
const audioMissed = new Audio('sounds/shoot-bow.mp3');
audioMissed.volume = 0.2;

let startTime;

const nick = document.getElementById('nickBox');
const playAgainBtn = document.getElementById('playAgainBtn');
const highscoresHeader = document.getElementById('highcoresHeader');
const highScoresTable = document.getElementById('highscores');

let highScoreData;


// highscore json blob: "https://jsonblob.com/2bc9a4f1-2d79-11eb-853c-a33cb082fbe7"

// resztę zaimplementuj sam :-)

function init(){
    while(nick.innerText == ""){
        nick.innerText = prompt("Insert your player name: ");
    }
    gameArea.setAttribute('onclick', 'miss()'); 
    gameArea.style.cursor = "crosshair"
    generateBallon();
}

function main(id, shooted, event){
    // console.log(id);
    if(event != null) event.stopPropagation();
    if(document.getElementById(id) == null) return;
    if(shooted){
        changeBackgroundColor('red',0);
        audioShooted.play();
        addPoints();
        addKill();
        addShot();
        updateAccuracy();
    }
    gameArea.removeChild(document.getElementById(id));
    if(balloonNumber <= 30){
        generateBallon();
    }
    else{
        addResult(nick.innerText, points, getCurrentFormattedDate());
        gameArea.removeAttribute('onclick');
        gameArea.style.cursor = "default";
        changeBackgroundColor('white', 0);
        playAgainBtn.style.visibility = "visible";
        highcoresHeader.style.visibility = "visible";

    }
}

function getMonthStrings() {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
}

function getCurrentFormattedDate(date) {
    return (function () {
        return getMonthStrings()[this.getMonth()] + ' ' + (function (d) {
            var s = d.toString(), l = s[s.length - 1];
            return s + (['st', 'nd', 'rd'][l - 1] || 'th');
        })(this.getDate()) + ', ' + this.getFullYear() + ' ' + ('0' + (this.getHours() % 12 || 12)).slice(-2) + ':' + ('0' + this.getMinutes()).slice(-2) + ':' + ('0' + this.getSeconds()).slice(-2) + ' ' + (this.getHours() >= 12 ? 'PM' : 'AM');
    }).call(date || new Date());
}

function generateBallon(){
    // const color = randomColor();
    roundBox.innerHTML = balloonNumber;
    changeBackgroundColor('white',100);
    const balloonDiameter = randomDiameter();
    const newBalloon = document.createElement('div');
    newBalloon.setAttribute('class', 'balloon');
    newBalloon.setAttribute('id', `balloon${balloonNumber}`);
    // newBalloon.innerHTML = balloonNumber;
    newBalloon.setAttribute('onclick', `main("balloon${balloonNumber}", true, event)`);
    newBalloon.style.backgroundColor = randomColor();
    newBalloon.style.width = balloonDiameter;
    newBalloon.style.height = balloonDiameter;
    newBalloon.style.top = Math.ceil(Math.random()*(400-balloonDiameter));
    newBalloon.style.left = Math.ceil(Math.random()*(900-balloonDiameter));
    gameArea.appendChild(newBalloon)
    setTimeout(`main("balloon${balloonNumber}", false, null)`, 2000/(balloonNumber/8));
    balloonNumber++;
    startTime = performance.now();

}
//jest szansa ze wylosuje sie kolor którego nie bedzie widac na tym tle, mozna zrobic tablice kolorow
function randomColor(){
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hexadecimal[Math.floor(Math.random()*16)];
    }
    return color;
}

function randomDiameter(){
    const min = 50;
    const max = 150;
    return Math.floor(Math.random()*(max-min) + min);
}

function miss(){
    audioMissed.play();
    points--;
    pointsBox.innerHTML = points.toFixed(2);
    addShot();
    updateAccuracy();
}

function addPoints(){
    let timeDifference = performance.now() - startTime;
    let result = 1000/timeDifference;
    points+= result;
    pointsBox.innerHTML = points.toFixed(2);
}

function addKill(){
    killNmb ++;
    killBox.innerHTML = killNmb;
}

function addShot(){
    shotNmb++;
    shotBox.innerHTML = shotNmb;
}

function updateAccuracy(){
    accuracy = ((killNmb/shotNmb)*100).toFixed(2);
    accuracyBox.innerHTML = accuracy;
}

function changeBackgroundColor(color, delay){
    setTimeout(() => {gameArea.style.backgroundColor = color}, delay);
}
init();


playAgainBtn.addEventListener('click', function(){
    playAgainBtn.style.visibility = "hidden";
    highcoresHeader.style.visibility = "hidden";
    highScoresTable.style.visibility = "hidden";
    accuracy = 0.00;
    shotNmb = 0;
    killNmb = 0;
    points = 0;
    balloonNumber = 1;
    nick.innerText = "";
    init();
})
//jednoczesnie dodaje nowy wynik, sortuje, i usuwam zbedne
async function addResult(playerName, playerResult, resDate){
    highScoreData = await getData()
    console.log(highScoreData)
    const data = {nick : playerName,
                  res: playerResult.toFixed(2),
                  date: resDate};
    highScoreData.results.push(data);
    console.log(highScoreData.results)
    highScoreData.results.sort(function(a,b){
        return b.res - a.res;
    })
    if(highScoreData.results.length > 7){
        highScoreData.results.pop();
    }
    console.log(highScoreData.results)
    await fetch("https://jsonblob.com/api/2bc9a4f1-2d79-11eb-853c-a33cb082fbe7", {
        method: 'PUT' ,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(highScoreData),
    })
        .then(response => response.json())
        .catch((error) => {
        console.error('Error:', error);
        });
    updateTable();
}

async function getData(){
    let res = await fetch("https://jsonblob.com/api/2bc9a4f1-2d79-11eb-853c-a33cb082fbe7")
        .then(response => response.json())
        .catch(error => console.log(error));
    return res
}

async function updateTable(){
    highScoresTable.innerHTML = '';
    highScoresTable.style.visibility = "visible";
    highScoreData = await getData()
    for( let i = 0 ; i < highScoreData.results.length; i++){
        const index = document.createElement('td');
        const myName = document.createElement('td');
        const myScore = document.createElement('td');
        const myDate = document.createElement('td');
        const myTr = document.createElement('tr');

        index.innerText = `${i+1}.`
        myName.innerText = highScoreData.results[i].nick;
        myScore.innerText = highScoreData.results[i].res;
        myDate.innerText = String(highScoreData.results[i].date);
        myTr.appendChild(index);
        myTr.appendChild(myName);
        myTr.appendChild(myScore);
        myTr.appendChild(myDate);
        highScoresTable.appendChild(myTr);
    }
}
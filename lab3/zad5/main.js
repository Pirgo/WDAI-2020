const res = document.getElementById('result')

var sum = 0

function add1(){
    sum += 1
    alert("nacisnąłeś niebieski o wartości 1")
    updateSum()
}

function add2(event){
    if(sum <= 30){
        sum += 2
    alert("nacisnąłeś czerwony o wartości 2")
    updateSum()
    }
    propagation(event)
    
}

function add5(event){
    if(sum <=50){
        sum += 5
    alert("nacisnąłeś żółty o wartości 5")
    updateSum()
    }
    propagation(event)
}


function updateSum(){
    res.innerHTML = `Points: ${sum}`
}

function propagation(event){
    if(document.getElementById('stop').checked){
        event.stopPropagation()
    }
}

function reset(){
    sum = 0
    updateSum()
}
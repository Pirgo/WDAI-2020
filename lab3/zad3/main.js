

function incrementValue(){
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


function toggler(){
    const currentvalue = document.getElementById('onoff').value
    if(currentvalue === 'ON'){
        document.getElementById('number').value = 0
        document.getElementById('onoff').value = 'OFF'
        document.getElementById('cnt').disabled = false
    }
    else{
        document.getElementById('number').value = 0
        document.getElementById('onoff').value = 'ON'
        document.getElementById('cnt').disabled = true
    }
}
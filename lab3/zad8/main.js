const numbers = document.getElementById('numbers')
const btn = document.getElementById('getMax')

function fMAX(arguments){
    let intarr = []
    let flag = true
    for(x of arguments){
        if (isNaN(parseInt(x))){
            flag = false
            break
        }
        intarr.push(parseInt(x))
    }
    if(!flag){
        document.getElementById('res').innerText = 'Podaj tylko liczby'
    }
    else{
        let res = Math.max.apply(Math,intarr)
    document.getElementById('res').innerText = res
    }
    
}

btn.addEventListener('click', (e) =>{
    let nmb = numbers.value.split(" ")
    fMAX(nmb)
})
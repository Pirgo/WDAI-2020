const numbers = document.getElementById('numbers')
const btn = document.getElementById('getMax')

function fMAX(arguments){
    let intarr = []
    let flag = true

    if(arguments.length < 2){
        document.getElementById('res').innerText = 'Podaj wiecej liczb'
        return
    }

    for(x of arguments){
        if (isNaN(x)){
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
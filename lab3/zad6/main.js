function calc(){
    fetch("http://localhost:3000/people")
        .then(response => response.json())
        .then(function(data){
            const res1 = document.getElementById('res1')
            const res2 = document.getElementById('res2')
            const res3 = document.getElementById('res3')
            const res4 = document.getElementById('avg')
            let avg = 0
            res1.innerHTML = null
            res2.innerHTML = null
            for(x of data){
                x.name = x.name + String(x.name.length)
                res1.innerHTML += x.name + " lat " + x.age + "<br>"
                avg += x.age
                if(x.name.includes("r")){
                    res2.innerHTML += x.name + " "
                }
            }
            res4.innerHTML = `Srednia wieku to ${avg/data.length}`
            data.sort(function(a,b){return a.age - b.age})
            res3.innerHTML = `${data[8].name} ${data[8].age}  ${data[2].name} ${data[2].age}`

        })
}
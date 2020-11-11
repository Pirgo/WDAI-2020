const btn = document.getElementById('btn')
const phone = document.getElementById('phone')
const names = document.getElementById('names')
const ul = document.getElementById('phoneBook')

var cnt = 1
console.log(btn)
console.log(phone)
console.log(names)
console.log(ul)
btn.addEventListener('click', (e) =>{
    let li = document.createElement('li')
    li.setAttribute("id", `element${cnt}`)
    let div1 = document.createElement('div')
    div1.setAttribute("id", "name")
    div1.innerHTML = names.value +"<br>" + phone.value
    let div2 = document.createElement('div')
    div2.setAttribute("id", `trash`)
    div2.setAttribute("onclick", `rmv(element${cnt})`)
    let i1 = document.createElement('i')
    i1.setAttribute("class", "fa fa-trash")
    div2.appendChild(i1)
    li.appendChild(div1)
    li.appendChild(div2)
    ul.appendChild(li)
    cnt = cnt + 1
    names.value = ''
    phone.value = ''

})

function rmv(id){
    ul.removeChild(id)
}
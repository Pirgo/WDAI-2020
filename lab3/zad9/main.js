const btn = document.getElementById('btn')
const phone = document.getElementById('phone')
const names = document.getElementById('names')
const ul = document.getElementById('phoneBook')
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
const namesvalidate = /^[a-z ,.'-]+$/i;

var cnt = 1
btn.addEventListener('click', (e) =>{
    if(phone.value == "" || phone.value == null || names.value == "" || names.value == null){
        alert("Podaj wszystkie dane");
        return;
    }
    if(!phone.value.match(phoneno)){
        alert("Nr telefonu niepoprawny");
        return;
    }

    if(!names.value.match(namesvalidate)){
        alert("Imię i nazwisko jest błedne");
        return;
    }
    
    
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
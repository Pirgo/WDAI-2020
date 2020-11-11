var list = [];
const userList = document.getElementById('arr');

function addFunction(){
    const value = document.getElementById('whattoadd').value
    list.push(value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(list))
    userList.appendChild(li)
    console.log(list)
    document.getElementById('whattoadd').value = ''
}

function removeFunction(){
    list.shift()
    console.log(list)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(list))
    userList.appendChild(li)
}
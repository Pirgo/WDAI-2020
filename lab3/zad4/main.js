
const userList = document.getElementById('arr');

function addFunction(){
    const value = document.getElementById('whattoadd').value
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(value))
    userList.appendChild(li)
    document.getElementById('whattoadd').value = ''
}

function removeFunction(){
    userList.removeChild(userList.firstElementChild)
}
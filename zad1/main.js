const userlist = document.getElementById('username');

function clickFunction(){
    const name = prompt("Podaj swoje imie");
    if (name != ''){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(name));
        username.appendChild(li);
    }
}
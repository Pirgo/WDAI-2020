const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const phone = document.getElementById('phone')
const genderM = document.getElementById('male')
const genderW = document.getElementById('female')
const birthday = document.getElementById('birthday')
const retiring = document.getElementById('retiring')
const form = document.getElementById('form')
const errorMessage = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if(!genderM.checked  && !genderW.checked){
        messages.push('zaznacz płec')
    }
    else{
        if(retiring.value - birthday.value < 65 && genderM.checked){
            messages.push('nie mozesz przejsc na emeryture')
        }
        else if(retiring.value - birthday.value < 60 && genderW.checked){
            messages.push('nie mozesz przejsc na emeryture')
        }
    }

    // if(birthday.value == '' || birthday.value == null){
    //     messages.push('podaj urodziny')
    // }

    // if(retiring.value == '' || retiring.value == null){
    //     messages.push('podaj kiedy chcesz przejsc na emeryture')
    // }

    // if(phone.value.length < 9){
    //     messages.push('Numer telefonu nie poprawny')
    // }

    // if(name.value == '' || name.value == null){
    //     messages.push('podaj imie')
    // }

    // if(lastname.value == '' || lastname.value == null){
    //     messages.push('podaj nazwisko')
    // }

    


    if(messages.length > 0){
        e.preventDefault()
        errorMessage.innerText = messages.join(', ')
    }
})

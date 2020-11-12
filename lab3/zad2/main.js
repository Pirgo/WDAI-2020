function changePhoto(){
    const x = document.getElementsByTagName('img')
    if(x[0].id === 'img-red'){
        x[0].src = 'imgs/sea.jpg'
        x[0].id = 'img-blue'
    }
    else{
        x[0].src = 'imgs/mountain.jpg'
        x[0].id = 'img-red'
    }
}


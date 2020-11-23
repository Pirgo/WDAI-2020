
async function getjson(from){
    let res = await fetch(from)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    return res
}

async function buildMain(){
    var cnt = 0
    let categories = await getjson("categories.json")
    categories = categories["Categories"]
    const prodA =  await getjson("produktyA.json")
    const prodB = await getjson("produktyB.json")
    const mainList = document.getElementById('list')
    let allproducts = merge(prodA, prodB)
    for(let i = 0; i<categories.length; i++){
        buildUl(cnt, categories[i], allproducts[categories[i]], mainList)
        cnt++
    }

}

buildMain()

function buildUl(cnt, category, products, mainList){
    const childUl = document.createElement('ul')
    const checkUl = document.createElement('input')
    const labelUl = document.createElement('label')

    labelUl.innerHTML = '>'
    checkUl.setAttribute('type', 'checkbox')
    checkUl.setAttribute('id', `element${cnt}`)
    checkUl.setAttribute('onclick', `hide(element${cnt})`)
    childUl.appendChild(checkUl)
    childUl.appendChild(labelUl)
    childUl.innerHTML += category
    
    for(let i =0; i<products.length; i++){
        const childLi = document.createElement('li')
        const checkLi = document.createElement('input')
        const labelLi = document.createElement('label')
        checkLi.setAttribute('type', 'checkbox')
        checkLi.setAttribute('id', `element${cnt}${i}`)
        checkLi.setAttribute('onclick', `addval("${products[i]}", element${cnt}${i})`)
        labelLi.innerHTML = '>'
        childLi.appendChild(checkLi)
        childLi.appendChild(labelLi)
        childLi.style.display = 'none'
        childLi.innerHTML += `${products[i]}`
        childUl.appendChild(childLi)
    }
    

    mainList.appendChild(childUl)

}

function hide(id){
    // console.log(id)
    if(id.checked){
        const chlabel = id.parentNode.childNodes[1]
        chlabel.innerHTML = "\\/"
        for(let i = 3; i<=id.parentNode.childElementCount; i++){
            let toHide = id.parentNode.childNodes[i]
            toHide.style.display = 'block'
        }
    }
    else{
        const chlabel = id.parentNode.childNodes[1]
        chlabel.innerHTML = ">"
        for(let i = 3; i<=id.parentNode.childElementCount; i++){
            let toHide = id.parentNode.childNodes[i]
            toHide.style.display = 'none'
        }
    }
    
}

function addval(what, id){
    const result = document.getElementById('res')

    if(id.checked){
        const childLi = document.createElement('li')
        childLi.setAttribute('id', `${id.id}li`)
        // console.log(what)
        // console.log(id)
        childLi.innerHTML = what
        result.appendChild(childLi)
    }
    else{
        const rmvchild = document.getElementById(`${id.id}li`)
        // console.log(rmvchild)
        result.removeChild(rmvchild)
    }
}

function merge(file1, file2){
    const res = Object.assign({}, file2, file1)
    for(const category in res){
        if(Object.keys(file1).includes(category)){
            for(let i = 0; i<file1[category].length; i++){
                if(!res[category].includes(file1[category][i])){
                    res[category].push(file1[category][i]);
                }
            }
        }
        if(Object.keys(file2).includes(category)){
            for(let i = 0; i<file2[category].length; i++){
                if(!res[category].includes(file2[category][i])){
                    res[category].push(file2[category][i]);
                }
            }
        }
    }
    return res
}
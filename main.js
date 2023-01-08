import { versiculos } from "./versiculos.js"
const cookie = document.querySelector('.contentClose')
const cookieOpen = document.querySelector('.contentOpen')
const button = document.querySelector('button')
const msg = document.querySelector('.msg')
var listNumSorted = []

cookie.addEventListener('click', function(){    
    setTimeout(function() {  
        cookie.classList.add('hidden')
        cookieOpen.classList.remove('hidden')
        contentMsg()
    }, 500)
})

button.addEventListener('click', function(){
    cookieOpen.classList.add('hidden')
    cookie.classList.remove('hidden')
})

function contentMsg(){
    let NumSorted = Math.floor(Math.random() * versiculos.length);
    if (listNumSorted.includes(NumSorted)){
        while (listNumSorted.includes(NumSorted)){
            NumSorted = Math.floor(Math.random() * versiculos.length);
        }
    }
    listNumSorted.push(NumSorted)
    if (listNumSorted.length == versiculos.length) {
        listNumSorted = []
    }
    msg.innerHTML = versiculos[NumSorted]
}


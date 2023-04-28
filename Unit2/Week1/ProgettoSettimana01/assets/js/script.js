document.addEventListener('DOMContentLoaded', () => {
    let scroll = window.scrollY

    const nav = document.querySelector("nav")
    const scrollChange = 350

    window.addEventListener('scroll', function() { 
        scroll = window.scrollY;
        scroll >= scrollChange ? nav.classList.add("white") : nav.classList.remove("white")
    })
    })
    
document.addEventListener('DOMContentLoaded', () => {
    let scroll = window.scrollY

    const nav = document.querySelector("button")
    const scrollChange = 350

    window.addEventListener('scroll', function() { 
        scroll = window.scrollY;
        scroll >= scrollChange ? nav.classList.add("green") : nav.classList.remove("green")
    })
    })


// ANIMAZIONE

let svg = document.querySelectorAll('svg path')
let animation = setInterval(() => {
    let random = Math.floor(Math.random() * svg.length)
    let mAnimation = svg[random]
    console.log(mAnimation.style.opacity);
    if(mAnimation.style.opacity && mAnimation.style.opacity === "0"){
        mAnimation.style.opacity = 1
    }
    else{
        mAnimation.style.opacity = 0
    }
}, 100)


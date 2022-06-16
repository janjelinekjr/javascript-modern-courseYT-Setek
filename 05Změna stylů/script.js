// Současné styly:
/*
let heading = document.querySelector("h1")

// získání současných stylů
let style = getComputedStyle(heading)
console.log(style.color)
console.log(style.backgroundColor)
*/

let form = document.querySelector("#color-change")
let body = document.querySelector("body")

form.addEventListener("submit", function(event){
    event.preventDefault()

    body.style.backgroundColor = event.target.elements.color.value
    event.target.elements.color.value = ""
})

let myForm = document.querySelector("#my-form")
let count = 0

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    // zvýšení count o 1
    count++

    // vytvoření a připnutí input
    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = `test-${count}`
    document.querySelector("#result").appendChild(input)

    // vytvoření a připnutí label
    let label = document.createElement("label")
    label.textContent = event.target.elements.task.value
    label.setAttribute("for", `test-${count}`)
    document.querySelector("#result").appendChild(label)
    // odstranění napsaného obsahu pole
    event.target.elements.task.value = ""
})

// roletka
let mySelect = document.querySelector("#my-select")
mySelect.addEventListener("change", function(event){
console.log(event.target.value)
})

/*
// Další události - mouseenter, mouseleave

let enterBtn = document.querySelector("button")
enterBtn.addEventListener("mouseenter", function(event){
    console.log("kurzor na tlačítku")
})

let leaveBtn = document.querySelector("button")
leaveBtn.addEventListener("mouseleave", function(event){
    console.log("kurzor mimo tlačítko")
})

// klávesové - keydown (jakmile jde klávesa dolu), keyup (až po uvolnění když jde klávesa nahoru), keypress (při držení)

document.querySelector("body").addEventListener("keydown", function(event){
    console.log("klávesa stisknuta")
})

document.querySelector("body").addEventListener("keyup", function(event){
    console.log("klávesa uvolněna")
})

document.querySelector("body").addEventListener("keypress", function(event){
    console.log("klávesa stlačena")
})
*/
// získání stisknuté klávesy
/*
document.querySelector("body").addEventListener("keydown", function(event){
    console.log(event.key)
})
*/

// Změna stylů:

let heading = document.querySelector("h1")
heading.style.color = "blue"

heading.addEventListener("mouseenter", function(event){
    heading.style.color = "red"
})

heading.addEventListener("mouseleave", function(event){
    heading.style.color = "blue"
})

// heading.style.fontSize = "50px"

// heading.style.display = "none"

// heading.style.fontWeight = 400
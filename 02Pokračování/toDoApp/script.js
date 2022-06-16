let myToDo = [{
    text: "vynést koš",
    completion: true
}, {
    text: "uklidit",
    completion: false
}, {
    text: "zamést",
    completion: true
}, {
    text: "nakrmit psa",
    completion: false
}, {
    text: "nakrmit kočku",
    completion: false
}]

// Vypsání kolik zbývá úkolů
/*
let toDoLeft = myToDo.filter(function(oneToDo){
    return !oneToDo.completion
})

let main = document.querySelector("main")
let newParagraph = document.createElement("p")
main.appendChild(newParagraph)

newParagraph.textContent = `Ještě zbývá udělat ${toDoLeft.length} úkoly`
*/

// úkol vypsat všechny úkoly do odstavců a zobrazit na stránce:
/*
for(let i = 0; i < myToDo.length; i++){
    let newParagraph2 = document.createElement("p")
    newParagraph2.textContent = myToDo[i].text
    main.appendChild(newParagraph2)
}
*/

// jen nesplněné úkoly:
let div = document.querySelector("#div-todo")

for(let i = 0; i < myToDo.length; i++){
    let newParagraph2 = document.createElement("p")
    if(myToDo[i].completion === false){
        newParagraph2.textContent = myToDo[i].text
        div.appendChild(newParagraph2)
    }
}

document.querySelector(".firstBtn").addEventListener("click", function(event){
    console.log("provedeno")
})
/*
let buttons = document.querySelectorAll("button")

buttons[0].addEventListener("click", function(event){
    console.log("kliknutí na první")
})
buttons[1].addEventListener("click", function(event){
    console.log("klnutí na druhé")
})
*/

// vybrání podle class:

let btn1 = document.querySelector(".firstButton")
let btn2 = document.querySelector(".secondButton")

btn1.addEventListener("click", function(event){
    console.log("kliknutí na první")
})
btn2.addEventListener("click", function(event){
    console.log("klnutí na druhé")
})

// filtrování úkolů:

// uložení do objektu
let toDoStat = {
    searchFor: "",
}

let input = document.querySelector("#input-todo")
input.addEventListener("input", function(event){
    toDoStat.searchFor = event.target.value
    renderArray(myToDo, toDoStat)
})
// filtrování
let renderArray = function(oneToDo, find){
    let arrayResult = oneToDo.filter(function(oneText){
        return oneText.text.toLowerCase().includes(find.searchFor.toLowerCase())
    })
    // filtrování pouze false
    let leftToDo = arrayResult.filter(function(oneToDo){
        return oneToDo.completion === false
    })

    document.querySelector("#div-left").innerHTML = ""

    let paragraph = document.createElement("p")
    paragraph.textContent = `Ještě zbývá udělat ${leftToDo.length} úkoly z následujících:`
    document.querySelector("#div-left").appendChild(paragraph)

    document.querySelector("#div-todo").innerHTML = ""

    arrayResult.forEach(function(oneText){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `úkol: ${oneText.text} <br> splněno: ${oneText.completion}`
        div.appendChild(paragraph)
    })
}


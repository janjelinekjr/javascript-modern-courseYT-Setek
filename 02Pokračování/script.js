// DOCUMENT OBJECT MODEL DOM:

// querySelector:
/*
let heading = document.querySelector("h1")
console.log(heading)
*/
// querySelectorAll:
/*
let allParagraphs = document.querySelectorAll("p")
console.log(allParagraphs)
console.log(allParagraphs[1]) // prace jako s polem
*/
// getElemenById:
/*
let myId = document.getElementById("dva")
console.log(myId)
*/
// getElementsByClassName:
/*
let myClass = document.getElementsByClassName("jedna")
console.log(myClass)
*/

// úkol:
/*
// Vyberte pomocí querySelectoru nadpis h1 a vypište do konzole
let heading1 = document.querySelector("h1")
console.log(heading1)
// Vyberte pomocí querySelectoru odstavec s idéčkem test2 a vypište do konzole
let test2 = document.querySelector("#test2")
console.log(test2)
// Vyberte pomocí querySelectorAll oba nadpisy h2 a oba dva vypište do konzole (každý zvlášť)
let headings2 = document.querySelectorAll("h2")
console.log(headings2)
console.log(headings2[0])
console.log(headings2[1])
// Vyberte pomocí querySelectorAll oba odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
let paragraphs = document.querySelectorAll(".test1")
console.log(paragraphs)
console.log(paragraphs[0])
console.log(paragraphs[1])
// Vyberte pomocí getElementsByClassName odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
let paragraphs2 = document.getElementsByClassName("test1")
console.log(paragraphs2)
console.log(paragraphs2[0])
console.log(paragraphs2[1])
// Vyberte pomocí getElementById odstavec s idéčkem test2 a vypište do konzole
let paragraph = document.getElementById("test2")
console.log(paragraph)
*/

// príce s textem:
/*
let heading = document.querySelector("h1")
console.log(heading.textContent) // lepší prevence proti XSS útokům
//console.log(heading.innerText)
//console.log(heading.innerHTML) // včetněš HTML tagů

heading.textContent = "Nový nadpis"
*/

// vypsání pomoc9 forEach:
/*
let paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

paragraphs.forEach(function(paragraph){
    console.log(paragraph.textContent)
    paragraph.textContent = "Pozor změna"
})
*/

// Nalezení a odstranění prvku:
/*
let paragraphs = document.querySelectorAll("p")

let searchFor = paragraphs.forEach(function(one){
    if(one.textContent.toLowerCase().includes("další")){
        one.remove()
    }
})
*/

// Přidání nového elementu:
/*
const newParagraph = document.createElement("p")
newParagraph.textContent = "Text nového odstavce"
console.log(newParagraph)

document.querySelector("body").appendChild(newParagraph)

const newDiv = document.createElement("div")
document.querySelector("body").appendChild(newDiv)

const secondParagraph = document.createElement("p")
secondParagraph.textContent = "Je to do divu"
newDiv.appendChild(secondParagraph)

secondParagraph.append("nový text") // přidá text za
secondParagraph.prepend("starý text") // přidá text před

const newSpan = document.createElement("span")
newSpan.textContent = "Nový span"
secondParagraph.prepend(newSpan)
*/

// Interakce:
/*
document.querySelector("a").addEventListener("click", function(){
    // call back function - funkce spustena po jine funkci
    console.log("funguje")
})
*/
/*
document.querySelector("a").addEventListener("click", function(event){
    // event.
    //console.log(event)
    event.target.textContent = "Cliked"
})
*/
/*
document.querySelector("h1").addEventListener("click", function(event){
    event.target.textContent = "Klikni na nadpis níže!"
})
document.querySelector("h2").addEventListener("click", function(event){
    event.target.textContent = "Klikni na nadpis níže!"
})
document.querySelector("h3").addEventListener("click", function(event){
    event.target.textContent = "Klikni na nadpis níže!"
})
*/


// Odchytávání input:
/*
let input = document.querySelector("#input-text")
input.addEventListener("change", function(event){ // change = jakmile nastane změna v poli a klikne se enter nebo vedle
    console.log(event.target.value)
})
*/
/*
let input = document.querySelector("#input-text")
input.addEventListener("input", function(event){ // input = ihned po změně vypisování
    console.log(event.target.value)
})
*/

// Filtrování a vypsání na stránku:
/*
let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

    // uložení dat do objektu:
    let filters = {
        searchText: "",
    }

    // Načtení dat z pole
    let licencePlate = document.querySelector("#licence-plate")
    licencePlate.addEventListener("input", function(event){
       filters.searchText = event.target.value
       renderCriminals(criminals, filters)
    })

  // filter:
        const renderCriminals = function(ourCriminals, tryToFind){
            let arrayResult = ourCriminals.filter(function(oneSupsect){
            return oneSupsect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
            })

            // Odstranění předešlých výsledků
            document.querySelector("#id-criminal").innerHTML = ""
            // přidání nových výsledků
            arrayResult.forEach(function(oneSupsect){
                let paragraph = document.createElement("p")
                paragraph.innerHTML = `Jméno: ${oneSupsect.firstName} <br> Příjmení: ${oneSupsect.secondName} <br> Datum narození: ${oneSupsect.birth} 
                <br> Adresa: ${oneSupsect.address} <br> Město: ${oneSupsect.city}`
                document.querySelector("#id-criminal").appendChild(paragraph)
            })
                
            }
*/


    
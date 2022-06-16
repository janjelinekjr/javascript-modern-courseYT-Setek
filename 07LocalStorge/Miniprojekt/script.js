// vytvoření pole pomocí funkce
const names = getSavedNames()

// odeslání formuláře a uložení do LS
let myForm = document.querySelector("#test-form")
let myCheckbox = document.querySelector(".my-checkbox")

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value,
        adult: myCheckbox.checked,
    })

    myCheckbox.checked = false
    event.target.elements.firstName.value = ""

    saveNames(names)
})

// vypisování zpět do stránky
let buttonToList = document.querySelector(".to-list")

buttonToList.addEventListener("click", function(event){
    document.querySelector(".list-names").innerHTML = ""

    let namesFromLS = localStorage.getItem("names")
    let namesFromLSJSON = JSON.parse(namesFromLS)

    namesFromLSJSON.forEach(function(myName){
        const oneNameHTML = generateHTMLStructure(myName)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})

window.addEventListener("storage", function(event){
    this.location.reload()
})
// f pro tvorbu pole

const getSavedNames = function(){
    const myNames = localStorage.getItem("names")

    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }
}

// f pro uložení jména do localstorage

const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(oneName))
}

// f pro generování HTML struktury po kliknutí na Vypsat

const generateHTMLStructure = function(oneName){
    const newDiv = document.createElement("div")
    const newLink = document.createElement("a")
    const newBtn = document.createElement("button")

    // nastavení mazacího tlačítka
    newBtn.textContent = "Vymazat jméno"
    newDiv.appendChild(newBtn)

    newBtn.addEventListener("click", function(event){
        removeNames(names, oneName.id)
        saveNames(names)
        toListAgain()
    })

    newLink.textContent = oneName.firstName
    if(oneName.adult === true){
        newLink.classList.add("adult")
    } else {
        newLink.classList.add("no-adult")
    }
    
    newLink.setAttribute("href", `edit.html#${oneName.id}`)

    newDiv.appendChild(newLink)

     return newDiv
}

// f pro odstranění jména
const removeNames = function(ourNames, id){
    const index = ourNames.findIndex(function(namesCheck){
        return namesCheck.id === id
    })

    if(index > -1){
        ourNames.splice(index, 1)
    }
}

// f pro smazaní dat po stisknutí tlačítka vymazat o vypsaných jmen
const toListAgain = function(){
    document.querySelector(".list-names").innerHTML = ""

    let remainingData = getSavedNames()

    remainingData.forEach(function(oneName){
        const newContent = generateHTMLStructure(oneName)
        document.querySelector(".list-names").appendChild(newContent)
    })
}
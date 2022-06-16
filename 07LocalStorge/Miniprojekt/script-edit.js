// získání ID kliknutého jména a pomocí substring(1) vynechání # a vytáhnutí objektů z LS 
let nameID = location.hash.substring(1)
let names = getSavedNames()

// porovnání ID objektu
let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID
})

if(searchedName === undefined){
    location.assign("index.html")
}

// vložení kliknutého jména do inputu
document.querySelector("#edited-name").value = searchedName.firstName

let changingForm = document.querySelector("#changing-form").addEventListener("submit", function(event){
    event.preventDefault()

    searchedName.firstName = event.target.elements.changingName.value
    saveNames(names)
})

window.addEventListener("storage", function(event){
    
    if(event.key === "names"){
        names = JSON.parse(event.newValue)
    }

    let searchedName = names.find(function(oneObject){
        return oneObject.id === nameID
    })
    
    if(searchedName === undefined){
        location.assign("index.html")
    }
    
    document.querySelector("#edited-name").value = searchedName.firstName
})
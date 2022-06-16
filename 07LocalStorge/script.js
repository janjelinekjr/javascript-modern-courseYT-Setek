// console/Application/Local Storage

// přidání položky do localStorage
/*
localStorage.setItem("location", "Praha")
localStorage.setItem("firstName", "Pepa")
localStorage.setItem("secondName", "Zdepa")

// update položky

localStorage.setItem("location", "Brno")

// Získání položky

localStorage.getItem("location")

// smazání položky

localStorage.removeItem("secondName")

// smazání všeho

localStorage.clear()
*/

// JSON převod
/*
let user = {
    firstName: "Jan",
    age: 27
}

// převod na string a přidání do LS
let userJSON = JSON.stringify(user)
localStorage.setItem("user", userJSON)

// získání z LS a převod zpět na objekt
let userFromLS = localStorage.getItem("user")
let myUser = JSON.parse(userFromLS)

console.log(`Jmenuji se ${myUser.firstName}.`)
*/

/*
if(localStorage.getItem("users") == null) {
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("users"))
}


let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function(event){
    // vypnutí defaultního chování formuláře
    event.preventDefault()
    // přidání hodnoty z inputu do pole myArray
    myArray.push(event.target.elements.firstName.value)
    // převedení pole myArray na string
    myArrayToLS = JSON.stringify(myArray)
    // přidání převedeného pole do local storage
    localStorage.setItem("users", myArrayToLS)
    // odstarnění zadané hodnoty v inputu
    event.target.elements.firstName.value = ""
    
    // získání položky z LS
    let myArrayFromLS = localStorage.getItem("users")
    // převedení ze stringu
    let convertFromLS = JSON.parse(myArrayFromLS)
    // vytvoření odstavce
    let paragraph = document.createElement("p")
    // přidání do odstavce vždy poslední prvek z pole
    paragraph.textContent = convertFromLS[convertFromLS.length - 1]
    // připojení vytvořeného odstavce k divu
    document.querySelector("#my-users").appendChild(paragraph)

})
// získání a převod pole z LS
let currentArray = localStorage.getItem("users")
let convertArray = JSON.parse(currentArray)

// procházení pole a vypisování do odstavce pro zachování na stránce
if(currentArray !== null){
    convertArray.forEach(function(oneUser){
    let paragraph = document.createElement("p")
    paragraph.textContent = oneUser
    document.querySelector("#my-users").appendChild(paragraph)
    })
}
*/

// Databáze zločinců
// Obsah tří inputů najednou do LS

let myForm = document.querySelector("#test-form")

// vytvoření pole
if(localStorage.getItem("criminals") == null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("criminals"))
}

// odeslání formuláře
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value,
        crime: event.target.elements.crime.value
    })

    event.target.elements.firstName.value = ""
    event.target.elements.lastName.value = ""
    event.target.elements.crime.value = ""

    myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem("criminals", myArrayToLS)
})

// Vypsání odeslaných hodnot
let toList = document.querySelector(".to-list")
toList.addEventListener("click", function(event){

    if(localStorage.getItem("criminals") == null){
        let paragraph = document.createElement("p")
        paragraph.textContent = "Databáze je prázdná"
        document.querySelector(".criminals-list").appendChild(paragraph)
    } else {
        let myStorage = localStorage.getItem("criminals")
        myStorageConvert = JSON.parse(myStorage)

        document.querySelector(".criminals-list").innerHTML = ""

        myStorageConvert.forEach(function(oneCriminal){
            let paragraph = document.createElement("p")

            paragraph.innerHTML = `Jméno: ${oneCriminal.firstName}, <br>
            Příjmení: ${oneCriminal.lastName},<br>
            Zločin: ${oneCriminal.crime}`

            paragraph.classList.add("basic-style")

            document.querySelector(".criminals-list").appendChild(paragraph)
    })
    }
})

// Filtrování:
let input = document.querySelector(".name-filter")
let myStorage = localStorage.getItem("criminals")
let myStorageConverted = JSON.parse(myStorage)

input.addEventListener("input", function(event){
    let search = event.target.value

    let results = myStorageConverted.filter(function(oneCriminal){
       return oneCriminal.firstName.toLowerCase().includes(search.toLowerCase())
    })

    document.querySelector(".filter-name").innerHTML = ""
    document.querySelector(".criminals-list").innerHTML = ""

    results.forEach(function(oneCriminal){
        let divFilter = document.querySelector(".filter-name")
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jméno: ${oneCriminal.firstName}, <br>
        Příjmení: ${oneCriminal.lastName},<br>
        Zločin: ${oneCriminal.crime}`
        divFilter.appendChild(paragraph)
    })
})


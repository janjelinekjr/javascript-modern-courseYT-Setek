/*
document.querySelector("#test-form").addEventListener("submit", function(event){
    // vypnutí výchoyího chování fomuláře
    event.preventDefault()
    
    // přístup k obsahu inputu
    console.log(event.target.elements.firstName.value)

    // vytvoření odstavce a přidání textu z pole
    let paragraph = document.createElement("p")
    paragraph.textContent = event.target.elements.firstName.value
    let div = document.querySelector("#from-form")
    div.appendChild(paragraph)

    // odstranění textu z pole po odeslání
    event.target.elements.firstName.value = ""

})
*/

document.querySelector("#test-form").addEventListener("submit", function(event){
    event.preventDefault()

    let firstName = event.target.elements.firstName.value
    let lastName = event.target.elements.lastName.value
    let email = event.target.elements.email.value

    let paragraph = document.createElement("p")
    paragraph.innerHTML = `Jméno: ${firstName} <br> Příjmení: ${lastName} <br> Email: ${email}`

    let div = document.querySelector("#from-form")
    div.appendChild(paragraph)
     
    event.target.elements.firstName.value = ""
    event.target.elements.lastName.value = ""
    event.target.elements.email.value = ""

})

let myCheckBox = document.querySelector("#my-checkbox")
myCheckBox.addEventListener("change", function(event){
    console.log(event.target.checked)
})
// Funkce šipková notace:
/*
// klasický delší zápis
let square = function(num){
    return num * num
}

console.log(square(5))

// kratší zápis šipkovou notací
let square2 = (num) => {
    return num * num
}

console.log(square2(3))

// ještě kratší zápis
let square3 = (num) => num * num

console.log(square3(2))
*/
/*
let sum = (a, b) => a + b

let substract = (a, b) => a - b

console.log(sum(5, 2))

console.log(substract(5, 2))
*/
/*
let people = [{
    name: "Jan",
    age: 15
}, {
    name: "Pepa",
    age: 29
}, {
    name: "Linda",
    age: 40
}]
*/
// klasicky
/*
const lessThan20 = people.filter(function(oneObject){
    return oneObject.age < 20
})

console.log(lessThen20)
*/

// šipkovou notací
/*
const lessThan20 = people.filter((oneObject) => oneObject.age < 20)

console.log(lessThan20)
*/
/*
let age15 = people.filter((oneObject) => oneObject.age === 15)

console.log(age15)

let namePepa = people.filter((oneObject) => oneObject.name === "Pepa")

let namePepa2 = people.find((oneObject) => oneObject.name.toLowerCase().includes("pepa"))
// nebo let namePepa2 = people.find((oneObject) => oneObject.name == ("Pepa"))

console.log(namePepa)
console.log(namePepa2)

// .filter() najde vype vechny shodujc se objekty, ale .find() najde pouze prvn shodujc se a dál už nepokračuje
*/

// vypsání argumentů (šipková notace arguments nezná neumožnuje jejich vypsání)
/*
const argum = function(){
    return arguments
    // nebo např. return arguments[2]
}

console.log(argum(3, 4, 5, 2))
*/
/*
const car = {
    color: "modrá",
    getInfo: function(){
        return `Barva tohoto auta je ${this.color}`
    }
}

console.log(car.getInfo())

// šipková notace a this. u objektů
const car2 = {
    color: "modrá",
    getInfo: () => `Barva tohoto auta je ${this.color}` // this.color se bude rovnat undefined, šipková notace neumí pracovat s this
                                                        // možnost by byla pouze přepsání na car.color
}

console.log(car2.getInfo())
*/
//-------------------------------------------------------------------------------------------------------------------------------------

// Ternární operátor
/*
const age = 20
let notification 
/*
// klasický zápis podmínky
if(age >= 18){
    notification = "Vstoupit"
} else {
    notification = "Nevstupovat"
}

console.log(notification)
*/

// zkrácený ternární operátor
/*
age >= 18 ? notification = "Vstoupit" : notification = "Nevstupovat"
//nebo ještě kratší nebo lze přímo vložit do původní proměnné
notification = age >= 18 ? "Vstoupit" : "Nevstupovat"

console.log(notification)
*/
/*
const myAge = 12

const letGo = () => console.log("Dovnitř")

const noGo = () => console.log("Nemožno")

myAge >= 18 ? letGo() : noGo()
*/
//--------------------------------------------------------------------------------------------------------------------------------------

// truthy a falsy hodnoty

// falsy hodnoty: false, 0, prázdný string, null, undefined, NaN
/*
const products = []
const product = products[0]

console.log(product)

if(product){
    console.log(`Produkt nalezen`)
} else {
    console.log(`Produkt nebyl nalezen`)
}
*/

// Coercion
/*
console.log("5" + 5)
console.log("5" - 5)

const result1 = "5" + 5
const result2 = "5" - 5

console.log(typeof result1)
console.log(typeof result2)

const result3 = false + 5
console.log(typeof result3)
console.log(result3)

console.log("5" === 5) // === porovnávají i datový typ (např. číslo = číslo pak true)
console.log("5" == 5)

(true = 1, false = 0)
*/
//-----------------------------------------------------------------------------------------------------------------------------------

// Chybové hlášky throw, throw Error
/*
const myTaxes = (income) => {
    if(typeof income === "number"){
        return income * 0.25
    } else {
        throw Error("Argument musí být číslo vocas")
    }
}
/*
const result = myTaxes(true)
console.log(result)
*/
// v případě, že lze funkci pouze používat a neni k ni přístup tak je možno pomocí try a catch ale spolu s předešlým
/*
try{
    const result = myTaxes(true) // pokud je zjištěna chyba provede se catch (e) pokud není provede se řádek níže
    console.log(result)
} catch (e) {
    throw Error("Argument musí být číslo vocas")
}
*/

//localStorage.setItem("age", 39)
/*
let myAge = localStorage.getItem("age")
console.log(typeof myAge)

myAge = JSON.parse(myAge)
console.log(typeof myAge)
*/

// zachycení chyby a pokračování v kodu
/*
let myAge2 = localStorage.getItem("age")

try {
    console.log(JSON.parse(myAge2))
} catch (e) {
    console.log("Pozor chyba!!!")
}

console.log(`kod pokračuje dál`)
*/

//-----------------------------------------------------------------------------------------------------------------------------------

// Strict mode "use strict"
// global scope {local scope}

//"use strict" // zajistí, že nevytvořená zde data budou házet chybu i při vynechání let nebo rezervované slovo public hodí chybu

// let data // řešení vytvořením proměnné v global scopu
/*
const ourTest = () => {
    // let data = "abcdefgh" (bude házet chybu kvůli scopu)
    data = "abcdefgh" // bez let nebude házet chybu, data vytvoří
}

ourTest()
console.log(data)
*/

// rezervované slovo např. public
//let public = "test"

//-----------------------------------------------------------------------------------------------------------------------------------

// cyklus while a do while

// forEach - prochází pole
// for - známe počet opakování
// while - dokud - nemusí se provést ani jednou
// do while - provede se vždy minimálně jednou a až pak se řeší zda je splněna podmínka pro další pokračování


//let i = 11
/*
while(i < 10){
    console.log(i)
    i++
}
*/
/*
do {
    console.log(i)
    i++
} while (i < 10)
*/
/*
"use strict"

let result

while(result !== "X"){
    result = prompt(`Pro ukončení zadejte X`)
    console.log(result)
}
*/
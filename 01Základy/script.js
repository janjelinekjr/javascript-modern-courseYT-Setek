// MODERNí JavaScript:

// Strings:

/*
let fisrtName = "Jan"
let job = "programmer"

console.log("Ahoj, jmenuji se " + fisrtName + " a pracuji jako " + job)
*/

// Numbers:
/*
let age = 30
let x = age * 10
console.log(x)

let firstName = "Jan"
let age = 26
console.log("Jmenuji se " + firstName + " a je mi " + age + "." + " Za 5 let mi bude " + (age + 5))
*/

/*
// Body studentů
let student1Points = 55
let student2Points = 78

// Jména studentů
let student1Name = "Pepa"
let student2Name = "Mařka"

// Maximální po4et bodů
let maxPoints = 150

// Výsledky v procentech
let student1Percent = (student1Points * 100)/maxPoints
let student2Percent = (student2Points * 100)/maxPoints

console.log(student1Name + " dosáhl(a) " + student1Percent + "% úspěšnosti.")
console.log(student2Name + " dosáhl(a) " + student2Percent + "% úspěšnosti.")
*/

// Boolean (pravda, nepravda)
// let adult = true/false
//Boolean operátory:
// === (rovná se), !== (nerovná se), <>, <= =>
/*
let age = 26

let child = age < 18
let adult = age >= 18
let pensioner = age >= 65


console.log("Dítě: " + child + ", Dospěý: " + adult + ", Důchodce: " + pensioner)
*/

// Podmínky (if, else if, else):
/*
let age = 14
age = 45

if (age > 18) {
    console.log("Dospělý")
} else if (age < 18) {
    console.log("Nezletilý")
} else {
    console.log("Jiné")
}
*/
/*
let applyingJob = "Programmer"

if (applyingJob === "Programmer") {
    console.log("Jaký je rozdíl mezi HTML CSS a JS?")
} else if (applyingJob === "Administrator") {
    console.log("Jaké znáte druhy sítí?")
} else if (applyingJob === "Officer") {
    console.log("Jaké znáte funkce v excelu?")
} else {
    console.log("Neplatné zaměstnání")
}
*/

// Logické operátory (a zároveń &&, nebo ||):
// && (zaroven)
/*
let firstName = "Jan"
let height = 185

if (firstName === "Jan" && height === 185) {
    console.log("Je to on!")
} else {
    console.log("Není to on!")
}
*/

// || (nebo)
/*
let firstName = "Jan"
let height = 185

if (firstName === "Jan" || height === 185) {
    console.log("Je to on!")
} else {
    console.log("Není to on!")
}
*/
/*
let temp = 11

if (temp <= 10) {
    console.log("Chladno")
} else if (temp >= 11 && temp <= 25) {
    console.log("Teplo")
} else if (temp > 26) {
    console.log("Horko")
}
*/
/*
let weight = 90
let height = 190

if(weight >= 100 || height >= 190) {
    console.log("podezřelý")
} else {
    console.log("v cajku")
}
*/

// Funkce zápisy:
/*
// klasický:
function hello1() {
    console.log("Hello! 1")
}

hello1()

// s proměnou
let hello2 = function() {
    console.log("Hello! 2")
}

hello2()

// šipková notace:
let hello3 = () => console.log("Hello! 3")
hello3()
*/

// Funkce - parametr a argument:
/*
let naDruhou = function(num) {
    console.log(num * num)
}

naDruhou(2)
naDruhou(546)
*/
// Funkce - return ve funkci
/*
let naDruhou = function(num) {
    let result = num * num
    return result
}

let value1 = naDruhou(5)

console.log(value1)

let increasingFunc = function(num) {
    let result = num + 100
    return result
}

let value2 = increasingFunc(10)
console.log(value2)
*/

/*
let adultChecker = function(age) {
    if(age >= 18) {
        let result = "dospělý"
        return result
    } else {
        let result = "dítě"
        return result
    }
}

let value = adultChecker(16)

if(value === "dospělý") {
    console.log("Výsledek věku: Dospělý")
    console.log("Můžeš vstoupit")
} else {
    console.log("Výsledek věku: Dítě")
    console.log("Nemžeš vstoupit")
}
*/

// Undefined (nějaká chyba) a null (úmyslně chybějící hodnota):

//undefined v proměnné:
/*
let age

if(age === undefined) {
    console.log("Zadejte věk")
} else {
    console.log(age)
}
*/
// undefined jako argument funkce:
/*
let myFunction = function(num) {
    console.log(num)
}

myFunction()
// chybějící argument = undefined
*/
// undefined u return:
/*
let myFunction2 = function(num) {
    return num
}
// chybějící argument = undefined
let value = myFunction2()
console.log(value)
*/
// Null pro vynulování - jako přiřazená hodnota:
/*
let age = 30
age = null
console.log(age)
*/

// Funkce s více parametry:
/*
let sum = function(a, b, c) {
    return a + b + c
}

let value = sum(5, 10, 4)
console.log(value)
*/

// Defaultní hodnota:
/*
let game = function(name = "Guest", score = 0) {
    console.log(name)
    console.log(score)
}
// (bez argumentů budou vypsané výchoyí hodnoty, tedy guset a 0)
game()
// v případě chybějáící pouye prvního argumentu undefined:
game(undefined, 50)
*/
/*
let firstNum = 9
let secondNum = 0
let thirdNum = 7

let entryCheck = function(a, b, c) {
    if(a === firstNum && b === secondNum && c === thirdNum) {
        console.log("Můžete vstoupit")
    } else {
        console.log("Nesprávný kód")
    }
}

entryCheck(9, 0, 7)
*/

// Template Strings:
/*
let myName = "Jan"
let age = 27
console.log(`Ahoj, já jsem ${myName} a je mi ${age} let.`)

let hello = function(firstName, lastName) {
    console.log(`Ahoj, moje jméno je ${firstName} a příjmení ${lastName}`)
}

hello("Jan", "Jelinek")
*/
/*
let movie = "Ospalá díra"
let director = "Tim Burton"
let award = "nejlepší výkon ve výpravě"
console.log(`Viděl jsem film ${movie}, který režíroval ${director}. Tento film získal ocenění ${award}.`)
*/

//Objekty:
/*
let myBook = {
    title: "Harry Potter",
    author: "J.K.R.",
    published: 1997
}
//výpis všech vlastností
console.log(myBook)
//výpis jednotlivých vlastností
console.log(myBook.title)
console.log(`${myBook.title} je kniha od ${myBook.author}.`)

//změna vlastností objektu:
myBook.title = "Harry Potter a Kámen mudrců"
console.log(myBook.title)
*/
/*
let person1 = {
    name: "Jan",
    age: "27",
    city: "Praha"
}

let person2 = {
    name: "Pepa",
    age: 38,
    city: "Berlin"
}

let person3 = {
    name: "Linda",
    age: 23,
    city: "Ostrava"
}
// person1
console.log(`Jmenuje se ${person1.name} a je mu ${person1.age} a pochází z města ${person1.city}.`)
console.log(`Jmenuje se ${person3.name}, je ji ${person3.age} a pochazi z mesta ${person3.city}.`)
*/

// Vzpisování objektů pomocí funkce:
/*
let person1 = {
    name: "Jan",
    age: "27",
    city: "Praha",
    gender: "male"
}

let person2 = {
    name: "Pepa",
    age: 38,
    city: "Berlin",
    gender: "male"
}

let person3 = {
    name: "Linda",
    age: 23,
    city: "Ostrava",
    gender: "female"
}

let aboutPerson = function(person) {
    if(person.gender === "male") {
        console.log(`Jmenuje se ${person.name} a je mu ${person.age}. Pochází z města ${person.city}`)
    } else if(person.gender === "female") {
        console.log(`Jmenuje se ${person.name} a je jí ${person.age}. Pochází z města ${person.city}`)
    }
}

aboutPerson(person1)
aboutPerson(person2)
aboutPerson(person3)
*/

// Objekty a proměnné:
/*
let firstName = "Jan"
let age = 27

let person1 = {
    name: firstName,
    age: age,
    city: "Praha",
    gender: "male"
}

console.log(person1)
*/

// Objekty a return:
/*
let person1 = {
    name: "Jan",
    age: "27",
    city: "Praha",
    gender: "male"
}

let person2 = {
    name: "Pepa",
    age: 38,
    city: "Berlin",
    gender: "male"
}

let personInfo = function(person) {
    return {
        basicInfo: `${person.name}, ${person.age} let, pohlaví: ${person.gender}`,
        locationInfo: `Pochází z ${person.city}`
    }
}

let result = personInfo(person1)
console.log(result)
console.log(result.basicInfo)
console.log(result.locationInfo)
*/

// Objekty a metody:
/*
let person1 = {
    name: "Jan",
    age: "27",
    city: "Praha",
    gender: "male",
    height: 185,
    sayHello: function(day) {
        console.log(`Hello! today is ${day}.`)
    },
    toDo: function(list) {
        return `Musíš udělat ${list}`
    }
}

person1.sayHello("Monday")
let result = person1.toDo("nákup")
console.log(result)
*/
/*
let school = {
    type: "Gymnázium",
    street: "Sokolovská",
    city: "Praha",
    capacity: 520,
    open: function() {
        console.log(`Otevřeno`)
    },
    close: function() {
        return `Zavřeno`
    }
}

console.log(school.type)
console.log(school.city)
school.open()

let status = school.close()
console.log(status)
*/
// Objekty (this.):
/*
let person1 = {
    firstName: "Jan",
    lastName: "Jelinek",
    age: 27,
    greet: function() {
        console.log(this.firstName)
        console.log(`Ahoj já jsem ${this.firstName}.`)
    }
}

let person2 = {
    firstName: "Pepa",
    lastName: "Novák",
    age: 34,
    greet: function() {
        console.log(this.firstName)
    }
}

person1.greet()
person2.greet()
*/
/*
let vladniNarizeni = true

 let school = {
     type: "Gymnazium",
     street: "Sokolská",
     city: "Praha",
     capacity: 210,
     open: function() {
         console.log(`škola ${this.type} ${this.city} je otevřena.`)
     },
     closed: function() {
         console.log(`škola ${this.type} ${this.city} je zavřena.`)
     }
 }
// nebo stačí pouze if(vladniNarizeni)
 if(vladniNarizeni === true) {
     school.closed()
 } else if(vladniNarizeni !== true) {
     school.open()
 }
*/

// Objekty: Property a Metody

// Metody na strings>
/*
let firstName = "Jan"
// délka stringu (.length je property):
console.log(firstName.length)
// velká písmena (toUpperCase() je metoda):
console.log(firstName.toUpperCase())
*/
/*
// zahrnuje (includes):
let sentence = "Pepa jede z depa"
let word = "Pepa"
console.log(sentence.includes(word))
*/
/*
// odstranění mezer:
let firstName = "     Jan  "
console.log(firstName.trim())
*/
/*
let password = "1234Pepa3"

if(password.length > 13) {
    console.log(`Velmi silné heslo`)
} else if (password.length >= 8 && password.length < 13) {
    console.log(`Silné heslo`)
} else if(password.length < 8) {
    console.log(`Slabé heslo!`)
}

if(password.includes(`1234`) || password.includes(`Pepa`)) {
    console.log(`!Heslo nesmí obsahovat 1234 ani jméno!`)
} else {
    console.log(`Heslo je v pořádku`)
}
*/

// Metody na numbers:
/*
let number = 3.637
// zaokrouhlení desetiného místa (číslo kolik chceme vidět des. čísel)
console.log(number.toFixed(2))
// zaokrouhlování na celá čísla
console.log(Math.round(number)) //zaokrouhlení
console.log(Math.floor(number)) //zaokrouhlení vždzycky dolů
console.log(Math.ceil(number)) //zaokrouhlení vždzycky nahoru
// Náhodná čísla:
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.ceil(Math.random() * 10)) // zaokrouhleno nahoru
*/
// náhodné číslo z intervalu:
/*
let min = 15
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min)) + min)
*/
/*
for(let i = 1; i <= 6; i++) {
    let numbers = Math.ceil(Math.random() * 6)
    console.log(numbers)
}
*/

// Konsatnta a promenné:
/*
const firstName = "Jan"
console.log(firstName)
*/

// Konstanta a objekty:
/*
const person = {
    age: 34,
    name: "Jan"
}
// vlastnosti a metody lye měnit ale nelze např. vložit nový objekt
// person = {}
person.age = 27
console.log(person.age)
*/

// let vs var
// let nelze znovu deklarovat, var lze znovu deklarovat
// let nelze vypsat mimo scope, var lze

// Arrays (pole):
/*
let names = ["Jan", "Pepa", "Zdepa"]
console.log(names[0])
*/
/*
let data = ["Jan", true, 12, false]
console.log(data[3])
// délka pole
console.log(data.length)
// možnost vypsání posledního prvku
console.log(data[data.length - 1])
*/
// Náhodný výběr z pole:
/*
let passwords = ["1234Pepa", "89797jKy", "lOtY945847"]
let randomPassword = passwords[Math.floor(Math.random() * 3)]
console.log(randomPassword)
*/

// přepsání prvku v poli:
/*
let testArray = ["test1", "test2", "test3"]
testArray[1] = "nahrazený prvek"
console.log(testArray)
*/
// přidání posledního prvku:
/*
let myArray = ["jedna", "dva", "tři"]
myArray.push("čtyři")
console.log(myArray)
// odstranění posledního prvku:
myArray.pop()
console.log(myArray)
// přidání prvku na první pozici, resp. 0:
myArray.unshift("nula")
console.log(myArray)
// mazání prvního prvku:
myArray.shift()
console.log(myArray)
*/
/*
// odstranění libovolného poyice a počtu v poli:
let mySecondArray = ["jedna", "dva", "tři"]

mySecondArray.splice(2, 1) // začne na pozici 2 a odstraní následující jeden prvek
console.log(mySecondArray)

let myThirdArray = ["jedna", "dva", "čtyři"]
myThirdArray.splice(2, 0, "tři") // začne na pozici 2 smaže 0 prvků a před pozici 2 přidá "tři"
console.log(myThirdArray)
*/
/*
let nameArray = []

for(let i = 1; i <= 3; i++) {
    nameArray.push(prompt("Zadej jméno:"))
}

console.log(nameArray)
*/

// cyklus forEach:
/*
let employees = ["Jan", "David", "Jana", "Linda"]

employees.forEach(function(person){
    console.log(person)
})

employees.forEach(function(person, index) {
    console.log(index)
    console.log(person)
})
*/
/*
let toDo = ["jít ven", "lehnout si", "zahrát si na pc", "najíst se"]

// vypsání všech
toDo.forEach(function(activities, index) {
    let position = index + 1
    console.log(`${position}. ${activities}`)
})
*/

// cyklus for:
// obrácený:
/*
for(let i = 3; i >= 0; i--) {
    console.log(i)
}
*/
// výpis pole:
/*
let employees = ["Jan", "David", "Jana", "Linda"]

for(let i = 0; i < employees.length; i++) {
    console.log(employees[i])
}
*/
/*
let toDo = ["jít ven", "lehnout si", "zahrát si na pc", "najíst se"]

for(let i = 0; i < toDo.length; i++) {
    console.log(`${i + 1}: ${toDo[i]}`)
}

let array = []

for(let i = 0; i <= 4; i++) {
    array.push(i)
}

console.log(array)
*/

// pole indexOf:
/*
let persons = ["Jan", "Petr", "Linda"]

console.log(persons.indexOf("Jan"))
console.log(persons.indexOf("Petr"))
console.log(persons.indexOf("Linda"))

console.log(persons.indexOf("Pepa")) // pokud nenalezeno vypíše -1
*/

// POLE OBJEKTů:
/*
let books = [{}, {
    title: "Harry potter a kámen",
    author: "J.K.R",
    published: 1997
}, {
    title: "Harry potter a komnata",
    author: "J.K.R",
    published: 1998
}, {
    title: "Harry potter a vězen",
    author: "J.K.R",
    published: 1999
}]

// console.log(books[0].title)
// console.log(books[1].title)
// console.log(books[2].title)

console.log(books.indexOf({})) // NA POLE OBJEKTU NELZE POUZIT indexOf
*/

// findIndex běžné pole:
/*
let array = [1, 2, 3, 566, 223]

let result = array.findIndex(function(number){
    return number > 10
})

console.log(result)
*/
// findIndex na pole objektů:
/*
let books = [{
    title: "Harry potter a kámen",
    author: "J.K.R",
    published: 1997
}, {
    title: "Harry potter a komnata",
    author: "J.K.R",
    published: 1998
}, {
    title: "Harry potter a vězen",
    author: "J.K.R",
    published: 1999
}]

// findIndex - hledání knihy publikované 1998
let result = books.findIndex(function(oneBook){
    return oneBook.published === 1998
})

console.log(result)
*/
/*
// 3 objekty
let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    address: "U sloupů 16",
    city: "České Budějovice"
    }, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    address: "Malská 29",
    city: "České Budějovice"
    }, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    address: "Stevardská 38",
    city: "České Budějovice"
    }]

// získání jména v prompt
let entryName = prompt("Zadejte jméno")

// prohledání pole pomocí findIndex a nalezení shodny získanéího jména
let result = criminals.findIndex(function(name){
    return name.firstName === entryName
})

// Vypsání nalezených údajů
if(result !== -1) {
    console.log(`Jméno: ${criminals[result].firstName}.`)
    console.log(`Příjmení: ${criminals[result].secondName}.`)
    console.log(`Datum narození: ${criminals[result].birth}.`)
    console.log(`Adresa: ${criminals[result].address}.`)
    console.log(`Město: ${criminals[result].city}.`)
} else {
    console.log("Nenalezeno")
}

//console.log(criminals[result].address)
*/

// Metoda find a běžné pole:
/*
let array = [1, 3, 2, 6]

let result = array.find(function(oneNum){
    return oneNum > 3
})

console.log(result)
*/

// Metoda find a pole objektů:
/*
let books = [{
    title: "Harry potter a kámen",
    author: "J.K.Rowlingová",
    published: 1997
}, {
    title: "Harry potter a komnata",
    author: "J.K.Rowlingová",
    published: 1998
}, {
    title: "Harry potter a vězen",
    author: "J.K.Rowlingová",
    published: 1999
}, {
    title: "životopos Rowlingové",
    author: "PepazDepa",
    published: 1999
}]


let result2 = books.find(function(oneBook){
    if(oneBook.published === 1998) {
        return oneBook
    }
})

console.log(result2.title)
*/

// filtrování na běžném poli:
/*
let names = ["Jan", "Pepa", "Jana", "Linda"]

// chci vyfiltrovat jména obsahující "na"
let arrayResult = names.filter(function(oneName){
    let tryToFind = oneName.toLowerCase().includes("na")
    return tryToFind
})

console.log(arrayResult)
*/
// Filtrování na poli objektů 1:
/*
let arrayResult2 = books.filter(function(oneBook){
    let tryToFind2 = oneBook.title.toLowerCase().includes("har")
    return tryToFind2
})
// vyfiltrování objektů obsahující "har" v title
console.log(arrayResult2)
// objekty obsahující "har" vypsat rok publikace - published
arrayResult2.forEach(function(oneResult){
    console.log(oneResult.published)
})
*/

// Filtrování na poli objektů 2:
/*
let arrayResult2 = books.filter(function(oneBook){
    let tryToFind2 = oneBook.author.toLowerCase().includes("row")
    let tryToFind3 = oneBook.title.toLowerCase().includes("row")
    return tryToFind2 || tryToFind3
})

console.log(arrayResult2)

arrayResult2.forEach(function(oneResult) {
    console.log(oneResult.published)
})
*/
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
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
    }]

    let entry = prompt("Zadejte hledaný text")

    let result = criminals.filter(function(oneStat){
        let findResult1 = oneStat.licencePlate.toLowerCase().includes(entry)
        return findResult1
    })

    result.forEach(function(oneStat){
        console.log(`Jméno: ${oneStat.firstName}.`)
        console.log(`Příjmení: ${oneStat.secondName}.`)
        console.log(`Narozen: ${oneStat.birth}.`)
        console.log(`Reg.zn.: ${oneStat.licencePlate}.`)
        console.log(`Adresa: ${oneStat.address}.`)
        console.log(`Město: ${oneStat.city}.`)
        console.log("------------------------------------")
    })
*/

// řazení jednoduchého pole:
/*
let names = ["Cecilie", "Anna", "Barbora"]
// seřazení podle abecedy:
names.sort()
console.log(names)

let numbers = [3, 5, 6, 4, 13]
numbers.sort()
console.log(numbers)
*/

// řazení pole objektů:
/*
let books = [{
    title: "Harry potter a kámen",
    author: "J.K.Rowlingová",
    published: 1997
}, {
    title: "Harry potter a vězen",
    author: "J.K.Rowlingová",
    published: 1999
}, {
    title: "Harry potter a komnata",
    author: "J.K.Rowlingová",
    published: 1998
}]

let sortArray = function(arrayBooks) {
    arrayBooks.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

sortArray(books)
console.log(books)
*/
/*
let numbers = [3, 5, 6, 4, 13]

let sortArray = function(numbers) {
    numbers.sort(function(a, b){
        if(a < b){
            return -1
        } else if(b < a){
            return 1
        } else {
            return 0
        }
    })
}

sortArray(numbers)
console.log(numbers)
*/

// bubble sort:
/*
let bubbleSort = [2, 9, 5, 4, 8, 1]

let sortsArray = function(numbers){
    numbers.sort(function(a, b){
        if(a < b){
            return -1
        } else if(b < a){
            return 1
        } else {
            return 0
        }
    })
}

sortsArray(bubbleSort)
console.log(bubbleSort)
*/


let divSquare = document.querySelector(".square")

let horizontal = null
let vertical = null

document.querySelector("body").addEventListener("keydown", function(event){

    let key = event.key

    if(key === "ArrowUp"){
        vertical -= 20
        divSquare.style.top = vertical + "px"
    } else if(key === "ArrowDown"){
        vertical += 20
        divSquare.style.top = vertical + "px"
    } else if(key === "ArrowLeft"){
        horizontal -= 20
        divSquare.style.left = horizontal + "px"
    } else if(key === "ArrowRight"){
        horizontal += 20
        divSquare.style.left = horizontal + "px"
    }
})


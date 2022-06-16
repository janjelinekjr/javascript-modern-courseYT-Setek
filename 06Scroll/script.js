// scrollování na konec stránky:
/*
window.addEventListener("scroll", function(event){
    // window.scrollY = vertikální osa Y (kde aktuálně jsme)
    let scrolled = window.scrollY
    // univerzální výpočet hodnoty konce scrollování
    let scrollable = document.documentElement.scrollHeight - window.innerHeight
    //let round = Math.round(scrolled)
    
    //console.log(scrollable)
    //console.log(scrolled)

    if(Math.round(scrolled) === scrollable){
        alert("This is the end")
    }
})
*/

// vyskakovací tlačítko zpět:
/*
window.addEventListener("scroll", function(event){
    let scrolled = Math.round(window.scrollY)
    let scrollable = document.documentElement.scrollHeight - window.innerHeight

    if(scrolled > (scrollable / 2)){
        let back = document.querySelector(".top-page")
        back.style.display = "block"

        back.addEventListener("click", function(event){
            back.style.display = "none"
        })
    } else {
        let back = document.querySelector(".top-page")
        back.style.display = "none"
    }

})
*/

let firstBtn = document.querySelector(".fisrt-item-menu")
let scrollGoal = document.querySelector(".scroll-goal").offsetTop

firstBtn.addEventListener("click", function(event){
    window.scrollTo({
        top: scrollGoal,
        behavior: "smooth"
    })
})

let secondBtn = document.querySelector(".second-item-menu")
let scrollGoal2 = document.querySelector(".scroll-goal2").offsetTop

secondBtn.addEventListener("click", function(event){
    window.scrollTo({
        top: scrollGoal2,
        behavior: "smooth"
    })
})

let thirdBtn = document.querySelector(".third-item-menu")
let scrollGoal3 = document.querySelector(".scroll-goal3").offsetTop

thirdBtn.addEventListener("click", function(event){
    window.scrollTo({
        top: scrollGoal3,
        behavior: "smooth"
    })
})

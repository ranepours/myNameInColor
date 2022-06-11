//how to pick a random color? - easiest way is to use rgb
function getColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

//const h1 = document.querySelector('h1')

//setInterval(function(){
//    h1.style.color = getColor();
//}, 500)

//we want to make each letter change individually, this is done w/ css - can now individually access our characters individually by calling our span tag! This will allow us to loop over each character to change our colors!

//smooth transitions done in css by giving our letters a transition property

const characters = document.querySelectorAll('.character')
setInterval(function (){
    for(let char of characters){
        char.style.color = getColor();
    }
}, 1100)

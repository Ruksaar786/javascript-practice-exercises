//write a function to change the background color of the page. first you can call the function on button click, pass the color of as argument. second generate the random color on button click.

//index.html, syle.css, script.js

//create a butt


const body = document.body;

function setColor(color){
    body.style.backgroundColor = color;
}

function rand(){
    const rand = Math.floor(Math.random()*16);
    return rand
}

//RGB



function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}


// Hexcode
// function randomColor(){
//     console.log(rand())
//     const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//     let hex = "#"
//     for(let i =0; i < 6; i++){
//         const index = rand();
//     hex += hexValue[index]
//     }
// console.log(hex)
//     body.style.backgroundColor = hex;
// }

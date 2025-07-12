// import {sum} from './sum'

// document.getElementById('button').addEventListener('click',()=>{
//     const result = sum(4,5);
//     document.getElementById('result').innerText = `the sum is ${result}`
// })
 

import water from './assets/water.jpg';
import nature from './assets/nature.webp';
document.getElementById("toast").style.visibility = "hidden";

document.getElementById("title").addEventListener('click',()=>{
    document.getElementById("toast").style.visibility = "visible";
})

document.getElementById("nature").src = nature
document.getElementById("water").src = water
import {sum} from './sum'

document.getElementById('button').addEventListener('click',()=>{
    const result = sum(4,5);
    document.getElementById('result').innerText = `the sum is ${result}`
})
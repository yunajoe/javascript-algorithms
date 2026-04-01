
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

function recursive(num){
    if(num === 0) return 0
    let residual = num % 10;
    num = Math.floor(num / 10); 
    return recursive(num) + Math.pow(residual, 2)
}

console.log(recursive(n));


const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.


function recursive(n){
    if(n === 1 || n === 2) return 1

    return recursive(n-1) + recursive(n-2)

}

console.log(recursive(n));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.
/**
 * 
 * 1. 짝수는 2로 나눈다. 홀수는 3으로 나눈다. 몫은 Math.floor()로 하기 
 * 2. return 조건은? 몫이 1이면은 끗
 * 3. 몇번은 어떻게 계산하나?  return 할때 + 1
 * 
 * 
 */
function recursive(n){
    if(n === 1) return 0
   
    if(n % 2 === 0){
        n = parseInt(n / 2)
    }else{
        n = parseInt(n / 3)
    }
    return recursive(n) + 1

}

console.log(recursive(n));
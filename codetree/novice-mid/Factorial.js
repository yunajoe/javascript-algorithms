const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.
function recursive(n){
   // 언제 끗?
   if(n <=1) return 1 
   return recursive(n-1) * n;

}
console.log(recursive(N));

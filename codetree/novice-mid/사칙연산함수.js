const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

const CAL_OBJECT = Object.freeze({
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
});

function FourBasicOperation(operation, num1, num2) {
  const fourbasicOperation = ["+", "-", "/", "*"];
  if (!fourbasicOperation.includes(operation)) return "False";
  const result = CAL_OBJECT[operation](num1, num2);
  const answer = `${num1} ${operation} ${num2} = ${Math.floor(result)}`;
  return answer;
}

console.log(FourBasicOperation(o, a, c));

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.

function ContinuosFunction(a, b) {
  // b의 첫번째 value의 인덱스들을 a array에서 찾아내자.
  const map = new Map();
  const startValue = b[0];

  for (let i = 0; i < a.length; i++) {
    if (startValue === a[i]) {
      map.set(i, true);
    }
  }

  for (const [key, value] of map.entries()) {
    for (let i = 0; i < b.length; i++) {
      if (a[key + i] !== b[i]) {
        map.set(key, false);
      }
    }
  }
  const values = Object.values(Object.fromEntries(map)).filter((v) => v);

  return values.length > 0 ? "Yes" : "No";
}

console.log(ContinuosFunction(a, b));

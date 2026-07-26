const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b, c, d] = input[0].split(" ").map(Number);
// Please Write your code here.
const timeLapsed = (hour, minutes) => {
  return 60 * hour + minutes;
};

const result1 = timeLapsed(a, b);
const result2 = timeLapsed(c, d);
console.log(result2 - result1);

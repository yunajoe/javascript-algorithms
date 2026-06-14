const fs = require("fs");

// [ 'A 50', 'B 80', 'C 79', 'Z 90', 'F 100' ]
const input = fs.readFileSync(0).toString().trim().split("\n");
class User {
  constructor(codename, score) {
    this.codename = codename;
    this.score = score;
  }
}

const users = input.map((value) => {
  const [codename, score] = value.split(" ");
  return new User(codename, parseInt(score, 10));
});

const lowestUser = users.reduce((prev, cur) => {
  if (prev.score <= cur.score) {
    return prev;
  }
  return cur;
}, users[0]);
// Please Write your code here.
console.log(`${lowestUser.codename} ${lowestUser.score}`);

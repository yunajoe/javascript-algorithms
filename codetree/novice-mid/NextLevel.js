const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [user_id, levelStr] = input[0].split(" ");
const level = parseInt(levelStr);

// Please Write your code here.

class NextLevel {
  constructor(user_id = "codetree", levelStr = 10) {
    this.user_id = user_id;
    this.levelStr = levelStr;
  }
}

const level1 = new NextLevel();
console.log(`user ${level1.user_id} lv ${level1.levelStr}`);

const level2 = new NextLevel("hello", 28);
console.log(`user ${level2.user_id} lv ${level2.levelStr}`);
